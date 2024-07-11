import { Box, Typography, Grid } from "@mui/material";
import profileImage from "../assets/profile.jpeg";
import Socials from "./Socials";

function Home() {
  return (
    <div id="Home">
      <Box pt={5}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <div className="gradientBox">
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "white",
                  border: "2px solid rgba(91,38,79,0.7624299719887955)", // Border with width, style, and color
                  padding: "20px", // Optional: Add padding for better appearance
                  borderRadius: "4px", // Optional: Add border radius for rounded corners
                  display: "inline",
                  background:
                    "linear-gradient(90deg, rgba(91,38,79,0.7624299719887955) 0%, rgba(51,32,96,0.7624299719887955) 100%)",
                  fontWeight: "600",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Welcome to my Portfolio
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mt: 3,
                  mb: 3,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Hi! I'm Deeksha
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  opacity: 0.7,
                  fontSize: { xs: "0.875rem", md: "1rem" ,lg:"1.2rem" },
                }}
              >
                A passionate and driven web developer with a strong foundation
                <br />
                in both frontend and backend technologies. Currently pursuing my
                <br />
                Bachelor's in Technology at the IIT, Mandi, I have honed my skills
                <br /> in creating responsive, user-friendly web applications and
                interfaces.
              </Typography>
              <Socials />
            </div>
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                mx: "auto",
                height: { xs: "300px", lg: "500px" },
                width: { xs: "300px", lg: "500px" },
                backgroundImage: `url(${profileImage})`,
                justifyContent: "center",
                backgroundSize: "cover",
                justifySelf: "center",
                boxShadow: "inset 0 0 0 10px rgba(0,0, 0,0.4)",
                animation: "profile_animate 8s ease-in-out infinite 1s",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
