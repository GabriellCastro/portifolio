import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Profile } from "~/components/profile";
import { ButtonTheme } from "~/components/buttonTheme";

const Home: NextPage = () => {
  return (
    <Container
      maxW="container.xl"
      centerContent
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Profile />
      <ButtonTheme />
    </Container>
  );
};

export default Home;
