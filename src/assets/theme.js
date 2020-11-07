import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const theme = {
  colors: {
    ligthGray: grey[400],
  },
};

export const themeMaterial = createMuiTheme(theme);
