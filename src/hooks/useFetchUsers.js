import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../sevices/api";

const useFetchUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getUsers(id);

        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { users, isLoading, error };
};

export default useFetchUsers;
