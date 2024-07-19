import React, { useState } from "react";
import UserList from "../components/UserList";
import UserDetail from "../components/UserDetail";
const UserDashboard: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserList setSelectedUserId={setSelectedUserId} />
        {selectedUserId && <UserDetail userId={selectedUserId} />}
      </div>
    </div>
  );
};

export default UserDashboard;
