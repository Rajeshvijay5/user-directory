import React, { useState, useEffect } from 'react';

export const Usertable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3000/');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const json = await response.json();
        setUserData(json.users); // Assuming the response has a 'users' array
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = userData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      
      <div className="overflow-x-auto">
  <table className="w-full table-auto border border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">S.No</th>
        <th className="border border-gray-300 px-4 py-2">Name</th>
        <th className="border border-gray-300 px-4 py-2">Age</th>
        <th className="border border-gray-300 px-4 py-2">Gender</th>
        <th className="border border-gray-300 px-4 py-2">City</th>
        <th className="border border-gray-300 px-4 py-2">State</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.map((item, index) => (
        <tr key={item._id}>
          <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
          <td className="border border-gray-300 px-4 py-2">{item.Name}</td>
          <td className="border border-gray-300 px-4 py-2">{item.Age}</td>
          <td className="border border-gray-300 px-4 py-2">{item.Gender}</td>
          <td className="border border-gray-300 px-4 py-2">{item.City}</td>
          <td className="border border-gray-300 px-4 py-2">{item.State}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
);
};

export default Usertable;
