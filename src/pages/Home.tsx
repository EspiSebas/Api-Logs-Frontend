import { useEffect, useState } from "react";
import { getPostByUser, getUser } from "../api/externalApi";
import TableView from "../components/TableView";
import ModalView from "../components/ModalView";


export const Home = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    getUser()
      .then(res => {
        setUsers(res.data);
        setLoadingUsers(false);
      })
      .catch(err => {
        console.error(err);
        setLoadingUsers(false);
      });
  }, []);

  const handleUserSelected = async (user: any) => {
    setSelectedUser(user);
    setShowModal(true);
    setLoadingPosts(true);

    try {
      const res = await getPostByUser(user.id);
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPosts(false);
    }
  };

  if (loadingUsers) return <p>Loading users...</p>;

  return (
    <>
      <div className="container mt-4">
        <h1>Users</h1>
        <TableView items={users} onUserSelect={handleUserSelected} />
      </div>

      <ModalView
        show={showModal}
        onClose={() => setShowModal(false)}
        title={`Posts de ${selectedUser?.name}`}
        content={
          loadingPosts ? (
            <p>Cargando posts...</p>
          ) : posts.length === 0 ? (
            <p>No hay posts</p>
          ) : (
            <ul>
              {posts.map((post: any) => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )
        }
      />
    </>
  );
};
