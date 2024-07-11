
import { Typography, Box, Button } from "@mui/material";

function Navlinks({ direction = "row" }) {
  return (
    <Box
      className="navlinks"
      sx={{
        display: "flex",
        flexDirection: direction,
        alignItems: direction === "row" ? "center" : "center",
        backgroundColor: direction === "column" ? "black" : "inherit", // Black background for vertical layout
        padding: direction === "column" ? "20px" : "0", // Padding for vertical layout
      }}
    >
      <Typography sx={{ ml: direction === "row" ? 4 : 0, pt: 0.5 }}>
        <a
          href="#Home"
          style={{ color: direction === "column" ? "white" : "inherit" }}
        >
          Home
        </a>
      </Typography>
      <Typography
        sx={{
          ml: direction === "row" ? 4 : 0,
          pt: 0.5,
        }}
      >
        <a
          href="#skills"
          style={{ color: direction === "column" ? "white" : "inherit" }}
        >
          Skills
        </a>
      </Typography>
      <Typography
        sx={{
          ml: direction === "row" ? 4 : 0,
          pt: 0.5,
        }}
      >
        <a
          href="#projects"
          style={{ color: direction === "column" ? "white" : "inherit" }}
        >
          Projects
        </a>
      </Typography>
      <Button
        variant="outlined"
        sx={{
          ml: direction === "row" ? 2 : 0,
          mt: direction === "column" ? 2 : 0, // Margin top for vertical layout
          color: "white", // Text color
          borderColor: "whitesmoke", // Border color
          padding: "10px",
          "&:hover": {
            backgroundColor: "white", // Light white background on hover
            color: "black",
            borderColor: "white", // Border color on hover
          },
        }}
      >
        Let's Connect
      </Button>
    </Box>
  );
}
export default Navlinks;
