import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    // components here
  },
});
