import { Button,Paper,Typography, ThemeProvider,createTheme} from "@mui/material";
  import { useState } from "react";
  import {baseTheme, theme1} from "../../style";
  import { deepmerge } from "@mui/utils";

  export default function Comp() {
    const [theme, setTheme] = useState(baseTheme);
  
    const handleSwitch = (whichTheme) => {
      const newTheme = deepmerge(theme, whichTheme);
      setTheme(createTheme(newTheme));
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Paper sx={{ height: "600px" }} className="App">
          <Typography color="primary" variant="h4">
            Material UI - Dynamic Theme
          </Typography>
          <Button
            onClick={() => setTheme(baseTheme)}
            variant="contained"
            color="primary"
          >
            Reset
          </Button>

          <Button onClick={() => handleSwitch(theme1)} variant="contained">
            Theme 
          </Button>

        </Paper>
      </ThemeProvider>
    );
  }
  