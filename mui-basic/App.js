import { Button, styled, Typography } from "@mui/material";
import { AddIcCall, Settings } from "@mui/icons-material";

function App() {
  //nat ki ui element hoac html element
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.light,
    color: "#888",
    margin: "10px",
    "&:hover": {
      backgroundColor: "light blue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <>
      <Button
        variant="text"
        color="otherColor"
        size="small"
        startIcon={<Settings />}
      >
        Text
      </Button>
      <Button
        variant="text"
        color="secondary"
        size="small"
        startIcon={<AddIcCall />}
      >
        Text
      </Button>
      <Button variant="contained" disabled size="small">
        Contained
      </Button>
      <Button variant="outlined" href="#text-buttons">
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        uses h1 styles but it is p tag
      </Typography>
      <BlueButton>My Blue Button</BlueButton>
      <BlueButton>another butto</BlueButton>
    </>
  );
}

export default App;
