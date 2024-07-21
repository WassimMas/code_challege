import React, { useState } from "react";
import UserList from "../components/UserList";
import UserDetail from "../components/UserDetail";
const UserDashboard: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 sm:flex-row  sm:gap-8">
        <div className="bg-stone-900 w-full sm:w-[250px] h-auto sm:h-screen">
          <h3 className="text-slate-500 text-lg mb-4 sm:mb-14 mt-6 italic pl-4">
            Users
          </h3>
          <div className="pl-3">
            {/* We have passed setSelectedUserId and selectedUserId as props to the UserList component */}
            <UserList
              setSelectedUserId={setSelectedUserId}
              selectedUserId={selectedUserId}
            />
          </div>
        </div>
        {selectedUserId && (
          <div className="w-full ">
            {/* We have passed selectedUserId as props to the UserDetail component */}
            <UserDetail userId={selectedUserId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
