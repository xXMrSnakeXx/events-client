import { Container } from "../components/Container/Container";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { Section } from "../components/Section/Section";

const Register = () => {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default Register;
