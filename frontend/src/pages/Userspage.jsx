import { useState, useEffect } from 'react';
import {Users} from '../components/Usercard';
import {Usertable} from './Usertable' ;
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); 

      try {
        const response = await fetch('http://localhost:3000/');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const json = await response.json();
        setUsers(json.users);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData(); 

  }, []);

  return (
    <div>
      <div className="flex justify-evenly">
        <div>
          <button className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded mt-4">
            User Information
          </button>
        </div>
        <div>
          <Link to="/usertable">
            <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded mt-4">
              <IoMdSearch className="mr-2" /> Search Information
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Users users={users}></Users>
      )}
    </div>
  );
}

export default App;