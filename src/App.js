import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup, Grid, Divider } from "@mui/material";
import {
  LooksOneTwoTone,
  LooksTwoTwoTone,
  Looks3TwoTone,
  Looks4TwoTone,
  CheckTwoTone,
  ClearTwoTone,
} from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Multi Choice Answers
          <Grid
            container
            rowSpacing={1}
            // columnSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{
                  padding: "60px",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                }}
              >
                <h1>A</h1>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{
                  padding: "60px",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                }}
              >
                <h1>B</h1>
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{
                  padding: "60px",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                }}
              >
                <h1>C</h1>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{
                  padding: "60px",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                }}
              >
                <h1>D</h1>
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Divider></Divider>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{
              width: "auto",
            }}
          >
            <h1>True</h1> <CheckTwoTone fontSize="large"></CheckTwoTone>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{
              width: "auto",
            }}
          >
            {" "}
            <h1>False</h1>
            <ClearTwoTone fontSize="large"></ClearTwoTone>
          </Button>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
