import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "./Routes";
import { theme } from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};
