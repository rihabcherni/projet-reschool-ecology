import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#393e46"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
});

export const theme1 = {
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00000"
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "10px"
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "gray"
          }
        },
        defaultProps: {
          elevation: 20
        }
      }
    }
  };
  