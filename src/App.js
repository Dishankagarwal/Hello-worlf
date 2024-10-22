import React, { useState, useEffect } from "react";
import Board from "./Components/Board"; // Adjust path based on actual folder structure
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [groupBy, setGroupBy] = useState('status'); // Default group by 'status'
    const [sortBy, setSortBy] = useState('priority'); // Default sort by 'priority'

    const handleGroupByChange = (event) => {
        setGroupBy(event.target.value);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };
    // Function to fetch the ticket list
    const getTicketList = async () => {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('API Response:', data);  // Log the data to inspect its structure
            return data;
        } catch (error) {
            setError(error.message);
            return [];
        }
    };

    // Function to rearrange the ticket list (e.g., by status)
    const reArrangeTicketList = (groupByParameter, sortByParameter, data) => {
        // Warn if data is not an array
    
        const groupedTickets = data.reduce((acc, ticket) => {
            // Initialize the array for the group parameter if it doesn't exist
            if (!acc[ticket[groupByParameter]]) {
                acc[ticket[groupByParameter]] = [];
            }
            // Push the ticket into the appropriate group array
            acc[ticket[groupByParameter]].push(ticket);
            return acc;
        }, {});
        
    
        // Sort the tickets within each group
        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key].sort((a, b) => {
                if (sortByParameter === 'priority') {
                    return b.priority - a.priority; // Ascending order
                } else if (sortByParameter === 'title') {
                    console.log("title",a.title,b.title)
                    return a.title.localeCompare(b.title); // Alphabetical order
                }
                // Add more sorting conditions as needed
                return 0; // No sorting if no valid sort parameter is found
            });
        });
    
        // Output the grouped and sorted tickets
        
        return groupedTickets; // Return grouped and sorted tickets
    };
    

    
 
    

    // Fetch and set tasks
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const ticketList = await getTicketList();

            // Check if the response has an array or if it's nested inside an object
            const tickets = Array.isArray(ticketList) ? ticketList : ticketList.tickets || [];

            // Rearrange and set tasks
            setTasks(reArrangeTicketList(groupBy,sortBy, tickets));
            setLoading(false);
        };
        fetchData();
    }, [groupBy,sortBy]); // Empty dependency array ensures this runs once when component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <h2>Ticket Manager</h2>
            <div>
                <label>
                    Group By:
                    <select value={groupBy} onChange={handleGroupByChange}>
                        <option value="status">Status</option>
                        <option value="userId">User ID</option>
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
                <h3>Grouped and Sorted Tickets</h3>
                <Board tasks={tasks} />
            </div>
        </div>
    );
};

export default App;