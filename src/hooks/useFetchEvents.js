import { useEffect, useState } from "react";
import { fetchEvents } from "../sevices/api";
import { useInView } from "react-intersection-observer";
import { useSelect } from "./useSelect";

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [initialEvents, setInitialEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const { select } = useSelect();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchEvents(page);
        setTotalPages(page < Math.ceil(data.totalEvents / 12));
        setEvents((prevEvents) => [...prevEvents, ...data.events]);

        setInitialEvents((prev) => [...prev, ...data.events]);
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

  useEffect(() => {
    if (!select) {
      setEvents(initialEvents);
      return;
    } else {
      const sortedEvents = [...events].sort((el1, el2) => {
        switch (select) {
          case "title":
            return el1.title.localeCompare(el2.title);
          case "date":
            return new Date(el1.event_date) - new Date(el2.event_date);
          case "organizer":
            return el1.organizer.localeCompare(el2.organizer);
          default:
            return 0;
        }
      });

      if (JSON.stringify(sortedEvents) !== JSON.stringify(events)) {
        setEvents(sortedEvents);
      }
    }
  }, [select, events, initialEvents]);

  return { events, isLoading, error, ref, totalPages };
};

export default useFetchEvents;
