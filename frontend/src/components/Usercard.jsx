import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component


export function Users({ users }) {
    return (
      <div className="grid grid-cols-1 gap-4 m-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">  {/* Added grid container and gap */}
        {users.map((user) => (
          <Link to={`/${user._id}`}> {/* Link to user details route */}
          <h1 className="bg-gray-300 rounded-md p-4 shadow-md max-w-sm sm:max-w-md text-center">
            {user.Name}
          </h1>
        </Link>
        ))}
      </div>
    );
  }
  
  export default Users;
  
