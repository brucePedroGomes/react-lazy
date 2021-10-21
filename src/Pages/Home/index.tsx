import { Stack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CenterContainer } from "../../components/CenterContainer";

export const Home = () => {
  return (
    <CenterContainer>
      <Heading mb="12">Home</Heading>
      <Stack>
        <Button as={Link} to="/about" colorScheme="pink">
          About
        </Button>
      </Stack>
    </CenterContainer>
  );
};
