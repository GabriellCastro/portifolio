import { Button, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const SocialButton: FC = () => {
  const socials = [
    {
      name: "Github",
      icon: <FiGithub fontSize="24px" />,
      url: "https://github.com/gabriellcastro",
    },
    {
      name: "Twitter",
      icon: <FiTwitter fontSize="24px"/>,
      url: "https://twitter.com/KastroGabriel",
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin fontSize="24px" />,
      url: "https://www.linkedin.com/in/eugabrielcastro/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram fontSize="24px" />,
      url: "https://www.instagram.com/kastrxx/",
    },
  ];

  return (
    <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={4}>
      {socials.map(({ name, icon, url }, index) => (
        <Button
          key={index}
          fontSize="lg"
          borderRight="10px solid transparent"
          _hover={{
            transitionDelay: "0.1s",
            transform: "scale(1.01)",
            borderColor: "green.500",
          }}
          _active={{
            borderColor: "green.500",
          }}
          bg="gray.500"
          w="100%"
          h="70px"
          leftIcon={icon}
          as="a"
          href={url}
          target="_blank"
        >
          {name}
        </Button>
      ))}
    </Grid>
  );
};
