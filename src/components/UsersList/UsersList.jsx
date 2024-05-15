import { Grid } from "../Grid/Grid";
import { GridItem } from "../GridItem/GridItem";
import { Heading } from "../Heading/Heading";
import UsersListItem from "../UsersListItem/UsersListItem";

const UsersList = ({ users }) => {
  return (
    <>
      <Heading info title="Participants of this event" bottom />
      <Grid>
        {users.map(({ _id: id, fullname, email }) => (
          <GridItem key={id}>
            <UsersListItem fullname={fullname} email={email} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default UsersList;
