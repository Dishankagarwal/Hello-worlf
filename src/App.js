import React, { useState, useEffect } from "react";
import Board from "./Components/Board"; // Adjust path based on actual folder structure
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    const reArrangeTicketList = (parameter, data) => {
        const groupedTickets = data.reduce((acc, ticket) => {
            // Initialize the array for the status if it doesn't exist
            if (!acc[ticket.status]) {
              acc[ticket.status] = [];
            }
            // Push the ticket into the appropriate status array
            acc[ticket.status].push(ticket);
            return acc;
          }, {});
          
          // Output the grouped tickets
          console.log(groupedTickets);

        console.warn('Data is not an array:', data);  // Warn if data is not an array
        return groupedTickets;  // Return data as is if not an array
    };

    // Fetch and set tasks
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const ticketList = await getTicketList();

            // Check if the response has an array or if it's nested inside an object
            const tickets = Array.isArray(ticketList) ? ticketList : ticketList.tickets || [];

            // Rearrange and set tasks
            setTasks(reArrangeTicketList("status", tickets));
            setLoading(false);
        };
        fetchData();
    }, []); // Empty dependency array ensures this runs once when component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            {/* Pass the tasks state as a prop to the Board component */}
            <Board tasks={tasks} />
        </div>
    );
};

export default App;