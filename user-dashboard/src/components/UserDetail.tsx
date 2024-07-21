import React from "react";
import useFetchUser from "../hooks/useFetchUser";
import cover from "../images/cover.jpeg";
import profile from "../images/user.png";

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
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={cover}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={profile} alt="profile" className="rounded-full" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user.name}
            </h3>
            <p className="font-medium">{user.username}</p>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                Catchphrase
              </h4>
              <p className="mt-4.5">{user.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

// Export the UserDetail component for use in other parts of the application
export default UserDetail;
