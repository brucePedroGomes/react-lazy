import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CenterContainer } from "../../components/CenterContainer";

const Contact = () => {
  return (
    <CenterContainer>
      <Heading mb="12">Contact</Heading>
      <Button as={Link} to="/" colorScheme="pink">
        Voltar
      </Button>
    </CenterContainer>
  );
};

export default Contact;
