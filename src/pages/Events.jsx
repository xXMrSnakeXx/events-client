import ButtonToTop from "../components/ButtonToTop/ButtonToTop";
import { Container } from "../components/Container/Container";
import EventsList from "../components/EventsList/EventsList";
import { Heading } from "../components/Heading/Heading";
import Loader from "../components/Loader/Loader";
import { Section } from "../components/Section/Section";
import useFetchEvents from "../hooks/useFetchEvents";

const Events = () => {
  const { events, isLoading, error, ref, totalPages } = useFetchEvents();
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        {events.length > 0 && (
          <>
            {" "}
            <EventsList events={events} /> {totalPages && <div ref={ref}></div>}
          </>
        )}
        <ButtonToTop />
      </Container>
    </Section>
  );
};

export default Events;
