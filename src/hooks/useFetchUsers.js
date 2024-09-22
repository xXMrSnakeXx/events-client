import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../sevices/api";
import Fuse from "fuse.js";
const useFetchUsers = (id) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const { id: paramsId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getUsers(paramsId || id);

        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [paramsId, id]);

  const onChange = (e) => {
    setFilter(e.target.value.trim().toLowerCase());
  };
  const filteredUsers = () => {
    if (!filter) {
      return users;
    }
    const options = {
      keys: ["fullname", "email"],
      threshold: 0.3,
    };
    const fuse = new Fuse(users, options);
    const result = fuse.search(filter);
    return result.map((user) => user.item);
  };

  return { users: filteredUsers(), isLoading, error, onChange };
};

export default useFetchUsers;
