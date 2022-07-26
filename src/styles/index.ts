import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { styles } from "./styles";

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  components: {
    // components here
  },
});
