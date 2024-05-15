import { useEffect, useState } from "react";
import { fetchEvents } from "../sevices/api";
import { useInView } from "react-intersection-observer";

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchEvents(page);
        setTotalPages(page < Math.ceil(data.totalEvents / 12));
        setEvents((prevEvents) => [...prevEvents, ...data.events]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);
  return { events, isLoading, error, ref, totalPages };
};

export default useFetchEvents;
