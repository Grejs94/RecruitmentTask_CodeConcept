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
};

export const colors = {
  black: "black",
  ligthGrey: grey[400],
};
