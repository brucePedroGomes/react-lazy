import { Stack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CenterContainer } from "../../components/CenterContainer";

const Home = () => {
  return (
    <CenterContainer>
      <Heading mb="12">Home</Heading>
      <Stack>
        <Button as={Link} to="/about" colorScheme="pink">
          About
        </Button>
        <Button as={Link} to="/contact" colorScheme="pink">
          Contact
        </Button>
      </Stack>
    </CenterContainer>
  );
};

export default Home;
