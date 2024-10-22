import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetailMap, setUserDetailMap] = useState({});
  const [error, setError] = useState(null);
  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem("groupBy") || "status";
  });
  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem("sortBy") || "priority";
  });
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const getTicketList = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("API Response:", data);
      return data;
    } catch (error) {
      setError(error.message);
      return [];
    }
  };

  const reArrangeTicketList = (groupByParameter, sortByParameter, data) => {
    const groupedTickets = data.reduce((acc, ticket) => {
      if (!acc[ticket[groupByParameter]]) {
        acc[ticket[groupByParameter]] = [];
      }

      acc[ticket[groupByParameter]].push(ticket);
      return acc;
    }, {});

    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => {
        if (sortByParameter === "priority") {
          return b.priority - a.priority;
        } else if (sortByParameter === "title") {
          console.log("title", a.title, b.title);
          return a.title.localeCompare(b.title);
        }

        return 0;
      });
    });

    return groupedTickets;
  };
  const createUserIdToNameMap = (users) => {
    console.log("users", users);
    return users.reduce((map, user) => {
      map[user.id] = user.name;
      return map;
    }, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const ticketList = await getTicketList();

      const tickets = Array.isArray(ticketList)
        ? ticketList
        : ticketList.tickets || [];

      setTasks(reArrangeTicketList(groupBy, sortBy, tickets));
      setUserDetailMap(createUserIdToNameMap(ticketList.users));
      setLoading(false);
    };
    fetchData();
  }, [groupBy, sortBy]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      
      <div className="header">
        <label>
          Group By:
          <select value={groupBy} onChange={handleGroupByChange}>
            <option value="status">Status</option>
            <option value="userId">User ID</option>
            <option value="priority">Priority</option>
          </select>
        </label>
        <label>
          Sort By:
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
      <div>
        
        <Board
          tasks={tasks}
          groupBy={groupBy}
          sortBy={sortBy}
          userDetailMap={userDetailMap}
        />
      </div>
    </div>
  );
};

export default App;
