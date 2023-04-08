import theme from "./../theme/main";

export function getContainerPadding() {
  return {
    paddingLeft: "1.6rem",
    paddingRight: "1.6rem",
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "13rem",
      paddingRight: "13rem",
    },
  };
}

export function getContainerMargin() {
  return {
    marginLeft: "1.6rem",
    marginRight: "1.6rem",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "13rem",
      marginRight: "13rem",
    },
  };
}
