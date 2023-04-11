import { Box, Button, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { FiDownload } from "react-icons/fi";

export const ButtonTheme: FC = () => {
  const buttons = [
    {
      name: "Download CV",
      link: "https://www.google.com",
      icon: <FiDownload />,
      color_text: "black",
      bg_color: "yellow.400",
    },
    {
      name: "Contact Me",
      link: "https://www.google.com",
      icon: null,
      color_text: "gray.400",
      bg_color: "blue.800",
    },
  ];

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {buttons.map(({ name, bg_color, color_text, icon, link }) => (
          <Button
            key={name}
            fontSize="lg"
            borderRight="5px solid transparent"
            _hover={{
              transitionDelay: "0.1s",
              borderColor: bg_color === "blue.800" ? "yellow.400" : "white",
            }}
            cursor={"pointer"}
            color={color_text}
            bg={bg_color}
            w="100%"
            h="50px"
            rightIcon={icon ? icon : (null as any)}
            as="a"
            href={link}
            target="_blank"
            fontWeight={"semibold"}
          >
            {name}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};
