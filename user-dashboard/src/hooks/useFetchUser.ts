import { useState, useEffect } from "react";
import axios from "axios";

// Define the User interface to represent the structure of user data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Custom hook to fetch user data based on the provided user ID
const useFetchUser = (id: number) => {
  // State to store the fetched user data
  const [user, setUser] = useState<User | null>(null);
  // State to indicate whether the data is currently being loaded
  const [loading, setLoading] = useState(false);
  // State to store any error message encountered during the fetch
  const [error, setError] = useState<string | null>(null);

  // useEffect to perform side effects (fetching data) when the component mounts or when the user ID changes
  useEffect(() => {
    // Function to fetch user data from the API
    const fetchUser = async () => {
      setLoading(true); // Set loading state to true before starting the fetch
      setError(null); // Clear any previous error message

      try {
        // Make a GET request to the API endpoint to fetch user data
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data); // Store the fetched user data in state
      } catch (err) {
        setError("Error fetching user data"); // Set error message if the fetch fails
      } finally {
        setLoading(false); // Set loading state to false after the fetch completes
      }
    };

    // Set a timeout to debounce the fetch request by 1 second
    const debounceTimeout = setTimeout(fetchUser, 1000);

    // Cleanup function to cancel the timeout if the component unmounts or the user ID changes
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [id]); // Dependency array containing the user ID, so the effect runs when the ID changes

  // Return the fetched user data, loading state, and error message to the component using the hook
  return { user, loading, error };
};

// Export the custom hook for use in other components
export default useFetchUser;
