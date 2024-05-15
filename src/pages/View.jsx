import ButtonToTop from "../components/ButtonToTop/ButtonToTop";
import { Container } from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import { Heading } from "../components/Heading/Heading";
import Loader from "../components/Loader/Loader";
import { Section } from "../components/Section/Section";
import UsersList from "../components/UsersList/UsersList";
import useFetchUsers from "../hooks/useFetchUsers";

const View = () => {
  const { users, isLoading, error , onChange} = useFetchUsers();
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
        <Filter onChange={onChange}/>
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
         <ButtonToTop/>
      </Container>
    </Section>
  );
};

export default View;
