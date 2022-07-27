import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Profile: FC = () => {
  return (
    <Box>
      <Flex direction="column">
        <Avatar
          name="Gabriel"
          src="https://avatars.githubusercontent.com/u/61993679?s=400&u=05636c7741f20aeb23fba2f82f05a30d3de231e8&v=4"
          size="2xl"
          borderRadius="md"
          marginBottom="12px"
        />
        <Text marginBottom="32px" fontSize="1.5rem">
          Hey there, {`I'm Gabriel`} 🧑🏻‍💻
        </Text>
      </Flex>
    </Box>
  );
};
