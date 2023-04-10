import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Profile } from "~/components/profile";
import { SocialButton } from "~/components/socialButton";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" centerContent>
      <Profile />
      <SocialButton />
    </Container>
  );
};

export default Home;
