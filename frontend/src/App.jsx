import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Components/Home/Hero/Hero";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Hero />
      <div style={{ padding: "20px" }}>
        <h1>Full Stack Project</h1>
        <h2>Users:</h2>
        <ul>
          {users.length > 0 ? (
            users.map((u) => <li key={u.id}>{u.name}</li>)
          ) : (
            <p>Loading users...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
