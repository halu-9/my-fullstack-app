import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res: { data: any; }) => setUsers(res.data))
      .catch((err: any) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: { id: any; name: any; }) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;