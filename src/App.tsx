import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Pages/Home";
import { Routes } from "./Routes";
import { theme } from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};
