import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function App() {
    const {id} = useParams();
    const [userid, setUserid] = useState({});

    useEffect(() => {
      axios
        .get(`http://localhost:3000/${id}`)
        .then((response) => {
          setUserid(response.data); 
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
      

    return (
      <div className="flex justify-center mt-6 ">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full border border-sky-400">
          <h1 className="text-2xl font-bold text-center mb-4">User Information</h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-gray-600">Name:</div>
            <div className="font-semibold">{userid.Name}</div>
            <div className="text-gray-600">Age:</div>
            <div className="font-semibold">{userid.Age}</div>
            <div className="text-gray-600">Gender:</div>
            <div className="font-semibold">{userid.Gender}</div>
            <div className="text-gray-600">City:</div>
            <div className="font-semibold">{userid.City}</div>
            <div className="text-gray-600">State:</div>
            <div className="font-semibold">{userid.State}</div>
          </div>
        </div>
      </div>
    );
    
}

export default App;