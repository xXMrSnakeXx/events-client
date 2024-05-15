import { Grid } from "../Grid/Grid";
import { GridItem } from "../GridItem/GridItem";
import EventsListItem from "../EventsListItem/EventsListItem";

const EventsList = ({ events }) => {
  return (
    <Grid>
      {events.map(({ _id: id, title, description, event_date, organizer }) => (
        <GridItem key={id}>
          <EventsListItem
            title={title}
            description={description}
            date={event_date}
            organizer={organizer}
            id={id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default EventsList;
