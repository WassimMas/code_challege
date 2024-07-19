import React from "react";
import useFetchUser from "../hooks/useFetchUser";

// Define the props interface for the UserDetail component
interface UserDetailProps {
  userId: number; // The ID of the user to fetch details for
}

// UserDetail component to display detailed information about a selected user
const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  // Use the custom hook to fetch user data based on the provided user ID
  const { user, loading, error } = useFetchUser(userId);

  // Show a loading message while the data is being fetched
  if (loading) return <p>Loading...</p>;
  // Show an error message if there was an error fetching the data
  if (error) return <p>{error}</p>;

  // Render the user details if the user data is available
  return (
    user && (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
      </div>
    )
  );
};

// Export the UserDetail component for use in other parts of the application
export default UserDetail;
