import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Profile } from "~/components/profile";
import { SocialButton } from "~/components/socialButton";

const Home: NextPage = () => {
  return (
    <Container
      maxW="1400px"
      px="6"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minH="100vh"
    >
      <Profile />
      <SocialButton />
    </Container>
  );
};

export default Home;
