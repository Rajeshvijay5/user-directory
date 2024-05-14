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

      <div className="flex justify-center mt-6">
  <div className="bg-white rounded-lg shadow-lg p-6 m-3 max-w-md w-full sm:max-w-2xl md:max-w-3xl border border-sky-400">
    <h1 className="text-2xl font-bold text-center mb-4">User Information</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="text-gray-600 font-semibold text-base sm:text-lg">Name:</div>
      <div className="font-semibold text-base sm:text-lg">{userid.Name}</div>
      <div className="text-gray-600 font-semibold text-base sm:text-lg">Age:</div>
      <div className="font-semibold text-base sm:text-lg">{userid.Age}</div>
      <div className="text-gray-600 font-semibold text-base sm:text-lg">Gender:</div>
      <div className="font-semibold text-base sm:text-lg">{userid.Gender}</div>
      <div className="text-gray-600 font-semibold text-base sm:text-lg">City:</div>
      <div className="font-semibold text-base sm:text-lg">{userid.City}</div>
      <div className="text-gray-600 font-semibold text-base sm:text-lg">State:</div>
      <div className="font-semibold text-base sm:text-lg">{userid.State}</div>
    </div>
  </div>
</div>

    


    );
    
}

export default App;