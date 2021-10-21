import { Stack } from "@chakra-ui/react";

export const CenterContainer: React.FC = ({ children }) => {
  return (
    <Stack justifyContent="center" alignItems="center" h="100vh">
      {children}
    </Stack>
  );
};
