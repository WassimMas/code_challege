import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

// Define the User interface to represent the structure of user data
interface User {
  id: number;
  name: string;
}

// Define the props interface for the UserList component
interface UserListProps {
  setSelectedUserId: (id: number) => void; // Function to set the selected user ID
  selectedUserId: number | null;
}

// UserList component to display a list of users
const UserList: React.FC<UserListProps> = ({
  setSelectedUserId,
  selectedUserId,
}) => {
  // State to store the list of users
  const [users, setUsers] = useState<User[]>([]);

  // useEffect to fetch the list of users when the component mounts
  useEffect(() => {
    // Function to fetch users from the API
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); // Store the fetched users in state
    };

    fetchUsers(); // Call the fetchUsers function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  console.log("userList", users);

  // useMemo to optimize rendering of the user list by memoizing the result
  const userList = useMemo(
    () =>
      users.map((user) => (
        <li key={user.id} className="cursor-pointer">
          <div
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1  duration-300 ease-in-out hover:bg-graydark ${
              selectedUserId === user.id ? "bg-graydark" : ""
            } `}
            onClick={() => setSelectedUserId(user.id)}
          >
            {user.name}
          </div>
        </li>
      )),
    [selectedUserId, setSelectedUserId, users]
  ); // Dependency array containing selectedUserId, setSelectedUserId and users, so the memoized result updates when they change

  return (
    <ul className=" list-none">
      {userList}
      {/* Render the memoized user list */}
    </ul>
  );
};

export default UserList;
