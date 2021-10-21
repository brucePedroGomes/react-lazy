import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CenterContainer } from "../../components/CenterContainer";

export const About = () => {
  return (
    <CenterContainer>
      <Heading mb="12">About</Heading>
      <Button as={Link} to="/" colorScheme="pink">
        Voltar
      </Button>
    </CenterContainer>
  );
};
