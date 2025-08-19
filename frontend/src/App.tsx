import { useState, useEffect } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  });

  return (
    <>
      <ul>
        {users.length === 0 ? (
          <li>該当なし</li>
        ) : (
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        )}
      </ul>
    </>
  );
}

export default App;
