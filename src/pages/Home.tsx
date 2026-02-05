import { useEffect, useState } from "react";
import { getUser } from "../api/externalApi";
import TableView from "../components/TableView";

export const Home = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then(res => {
        setUsers(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  return (
    <div className="container mt-4">
        <h1>Users</h1>
        <TableView items={users}/>
    </div>
  )
}
