import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSpring, animated } from '@react-spring/web';
import Htmlicon from "../assets/html-1.svg";
import Bootstrapicon from "../assets/bootstrap-5-1.svg";
import CSSicon from "../assets/css-3.svg";
import Expressicon from "../assets/express-109.svg";
import Jqueryicon from "../assets/jquery-2.svg";
import Javascripticon from "../assets/logo-javascript.svg";
import Nodejsicon from "../assets/nodejs.svg";
import Reacticon from "../assets/react-2.svg";
import Vueicon from "../assets/vue-9.svg";

const skills = [
  { id: 1, name: 'HTML', icon: Htmlicon },
  { id: 2, name: 'CSS', icon: CSSicon },
  { id: 3, name: 'Javascript', icon: Javascripticon },
  { id: 4, name: 'NodeJS', icon: Nodejsicon },
  { id: 5, name: 'ExpressJS', icon: Expressicon },
  { id: 6, name: 'Jquery', icon: Jqueryicon },
  { id: 7, name: 'Bootstrap', icon: Bootstrapicon },
  { id: 8, name: 'ReactJS', icon: Reacticon },
  { id: 9, name: 'VueJS', icon: Vueicon },
  // Add more skills as needed
];

const CardSlider = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLg = useMediaQuery(theme.breakpoints.up('md'));

  const getVisibleCards = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    return 3;
  };

  const visibleCards = getVisibleCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? skills.length - visibleCards : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === skills.length - visibleCards ? 0 : prevIndex + 1));
  };

  const props = useSpring({
    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
    config: { tension: 220, friction: 30 },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: 4,
      }}
      className="skillslider"
    >
      <Typography variant="h2" sx={{ marginBottom: 2, fontWeight: 600, fontSize: { xs: '2rem', md: '3rem' } }}>
        Skills
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 6, textAlign: 'center', fontWeight: '500', opacity: 0.7, fontSize: { xs: '1rem', md: '1.25rem' } }}>
        Here is a snapshot of my skills and expertise in Web Development
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Button onClick={handlePrevClick} sx={{ color: 'white' }}>
          <ArrowBackIosIcon />
        </Button>

        <Box sx={{ overflowX: 'hidden', width: '100%', padding: "10px" }}>
          <animated.div
            style={{
              display: 'flex',
              transform: props.transform,
              willChange: 'transform',
            }}
          >
            {skills.map((skill) => (
              <Card
                key={skill.id}
                sx={{
                  minWidth: `calc(100% / ${visibleCards})`,
                  marginX: 1,
                  backgroundColor: 'grey.900',
                  color: 'white',
                  transition: 'transform 0.3s ease-in-out', // CSS transition for smooth scaling
                  '&:hover': {
                    transform: 'scale(1.05)', // Scale up by 5% on hover
                  },
                }}
              >
                <CardContent sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                  <img src={skill.icon} alt={skill.name} style={{ width: '50px', height: '50px' }} /> {/* Render the image */}
                  <Typography variant="h5" component="div" sx={{ pt: 4 }}>
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </animated.div>
        </Box>

        <Button onClick={handleNextClick} sx={{ color: 'white' }}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default CardSlider;
