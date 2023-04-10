import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Profile: FC = () => {
  return (
    <Box mt="16" mb="16">
      <Flex direction={{ base: "column", md: "row" }} alignItems="center">
        <Box borderRadius="full" boxShadow="0 0 0 3px #fff, 0 0 0 6px #FFE071">
          <Avatar
            name="Gabriel"
            src="https://avatars.githubusercontent.com/u/61993679?s=400&u=05636c7741f20aeb23fba2f82f05a30d3de231e8&v=4"
            size="2xl"
            borderRadius="full"
          />
        </Box>
        <Flex direction="column">
          <Text
            fontSize="1.5rem"
            ml="8"
            fontWeight="semibold"
            mt={{ base: "6", md: "0" }}
          >
            Gabriel Castro 🧑🏻‍💻
          </Text>
          <Text fontSize="1rem" ml="8" color="gray.400">
            Full-Stack Developer
          </Text>
          <Flex direction="row" mt="3" ml="8" gap={8}>
            <FiGithub
              fontSize="24px"
              onClick={() =>
                window.open("https://github.com/gabriellcastro", "_blank")
              }
              cursor="pointer"
            />
            <FiLinkedin
              fontSize="24px"
              cursor="pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/eugabrielcastro/",
                  "_blank"
                )
              }
            />
            <FiTwitter
              fontSize="24px"
              cursor="pointer"
              onClick={() =>
                window.open("https://twitter.com/gabriellcastro_", "_blank")
              }
            />

            <FiInstagram
              fontSize="24px"
              cursor="pointer"
              onClick={() =>
                window.open("https://www.instagram.com/urlgabriel/", "_blank")
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
