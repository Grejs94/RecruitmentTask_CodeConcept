import grey from "@material-ui/core/colors/grey";

export const media = {
  xs: "@media (max-width: 480px)",
  sm: "@media (max-width: 576px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 992px)",
  xl: "@media (max-width: 1200px)",
  xxl: "@media (max-width: 1600px)",
};

export const themeCss = {
  xs_text: "10px",
  md_text: "12px",
};

export const css = {
  xs_text: `font-size: ${themeCss.xs_text};`,
  md_text: `font-size: ${themeCss.md_text};`,
  boxShadow_normal: `box-shadow: 0px 0px 14px -2px rgba(0,0,0,0.18);`,
};

export const colors = {
  black: "black",
  ligthGrey_300: grey[300],
  ligthGrey_500: grey[500],
  ligthGrey_700: grey[700],
};
