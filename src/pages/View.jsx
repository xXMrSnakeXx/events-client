import { Container } from "../components/Container/Container";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import { Heading } from "../components/Heading/Heading";
import Loader from "../components/Loader/Loader";
import { Section } from "../components/Section/Section";
import UsersList from "../components/UsersList/UsersList";
import useFetchUsers from "../hooks/useFetchUsers";

const View = () => {
  const { users, isLoading, error } = useFetchUsers();
  return (
    <Section>
      <Container>
        <GoBackBtn />
        {isLoading && <Loader />}
        {error && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}

        {users !== null && (
          <>
            {users.length > 0 ? (
              <UsersList users={users} />
            ) : (
              <Heading
                info
                title="There are no participants in this event 😭"
              />
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default View;
