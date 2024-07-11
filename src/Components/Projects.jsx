import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Link } from '@mui/material';
import Blog from "../assets/blog.png";
import Chess from "../assets/chess.png";
import Hiking from "../assets/hiking.png";
import Landing from "../assets/landing.png";
import Loggin from "../assets/login.png";
import Personal from "../assets/personal.png";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    };

    const cards = [
        {
            title: 'Chess Game',
            description: 'Created a Chess Game using HTML, CSS, Javascript(Jquery)',
            url: Chess,
            gitlink: 'https://github.com/gosaindeeksha/Chess-Game'
        },
        {
            title: 'Hiking Life',
            description: 'Made a website Landing Page using ReactJS + Bootstrap',
            url: Hiking,
            gitlink: 'https://github.com/gosaindeeksha/hiking-life'
        },
        {
            title: 'Portfolio Website',
            description: 'Created a responsive protfolio website using HTML CSS + Bootstrap and Javascript',
            url: Personal,
            gitlink: 'https://github.com/gosaindeeksha/Portfolio-webste'
        },
        {
            title: 'Login Page',
            description: 'Created a login page using bootstrap and VUEJS',
            url: Loggin,
            gitlink: 'https://github.com/gosaindeeksha/mgm---login'
        },
        {
            title: 'Event Landing Page',
            description: 'Created an Event landing page using HTML CSS and Javascript',
            url: Landing,
            gitlink: 'https://github.com/gosaindeeksha/Event-Landing-Page'
        },
        {
            title: 'Blog Website',
            description: 'Created a Blog Website with add, edit , delete functionality using EJS and ExpressJS',
            url: Blog,
            gitlink: 'https://github.com/gosaindeeksha/blog-website'
        }
    ];

    const firstRowCards = cards.slice(0, 3);
    const secondRowCards = showMore ? cards.slice(3) : [];

    return (
        <div id="projects">
            <Typography variant='h2' sx={{ textAlign: "center", fontWeight: 600, mb: 10 }}>My Projects</Typography>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {firstRowCards.map((card, index) => (
                    <Card key={index} sx={{ width: '25vw',height:'25vw', margin: '10px', backgroundColor: 'grey.900', color: 'white', backgroundImage: `url(${card.url})`, backgroundSize: "cover", }}>
                        <CardContent sx={{
                            backgroundColor: 'grey.900',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',height:'100%',
                            opacity: "0",
                            '&:hover': {
                                opacity: "1",
                                background: "linear-gradient(90deg, rgba(91,38,79,0.8624299719887955) 0%, rgba(51,32,96,0.8624299719887955) 100%)",
                            }
                        }}>
                            <div>
                                <Typography variant="h5" component="div" sx={{ textAlign: "center", mb: 2, fontWeight: 550 }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text">
                                    {card.description}
                                </Typography>
                            </div>
                            <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                                <hr />
                                <Link href={card.gitlink} target="_blank" rel="noopener noreferrer" underline='none'>
                                    <Typography variant="subtitle1" color="text">
                                        Visit Github Repository
                                    </Typography>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {secondRowCards.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {secondRowCards.map((card, index) => (
                        <Card key={index} sx={{ width: '25vw',height:'25vw', margin: '10px', backgroundColor: 'grey.900', color: 'white', backgroundImage: `url(${card.url})`, backgroundSize: "cover", }}>
                            <CardContent sx={{
                                backgroundColor: 'grey.900',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                height:"100%",
                                width:"100%",
                                justifyContent: 'space-between',
                                opacity: "0",
                                '&:hover': {
                                    opacity: "1",
                                    background: "linear-gradient(90deg, rgba(91,38,79,0.8624299719887955) 0%, rgba(51,32,96,0.8624299719887955) 100%)",
                                }
                            }}>
                                <div>
                                    <Typography variant="h5" component="div" sx={{ textAlign: "center", mb: 2, fontWeight: 550 }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text">
                                        {card.description}
                                    </Typography>
                                </div>
                                <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                                    <hr />
                                    <Link href={card.gitlink} target="_blank" rel="noopener noreferrer" underline='none'>
                                        <Typography variant="subtitle1" color="text">
                                            Visit Github Repository
                                        </Typography>
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Button
                    id="show-more"
                    onClick={handleClick}
                    variant="outlined"
                    sx={{
                        color: "white",
                        borderColor: "whitesmoke",
                        padding: "10px",
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                            backgroundColor: "white",
                            color: "black",
                            borderColor: "white",
                            '& .MuiSvgIcon-root': {
                                color: 'black',
                            },
                        },
                    }}
                >
                    {showMore ? 'see less' : 'see more'}
                </Button>
            </Box>
        </div>
    );
}
