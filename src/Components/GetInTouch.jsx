import { Box, TextField, Button, Typography, Grid, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

const GetInTouchForm = () => {
    return (
        <div id='contact'>
            <Typography variant='h2' sx={{ textAlign: "center" }}>Get In Touch</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
                <Box
                    sx={{
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        maxWidth: 500,
                        minHeight: "100%",
                        mx: 'auto',
                        mt: 5,
                        color: 'white',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: { xs: '100%', sm: '45%', md: '30%' },
                    }}
                >
                    <Link href="" underline='none' sx={{ ml: 4, alignSelf: "center" }}>
                        <Typography variant='h3'><LinkedInIcon sx={{ fontSize: "5rem" }} /> LinkedIn</Typography>
                    </Link>

                    <Link href="" underline='none' sx={{ ml: 4, alignSelf: "center" }}>
                        <Typography variant='h3'><GitHubIcon sx={{ fontSize: "5rem" }} /> Github</Typography>
                    </Link>

                    <Button variant="outlined" sx={{
                        ml: 4,
                        color: "white", // Text color
                        borderColor: "whitesmoke", // Border color
                        padding: "10px",
                        display: 'flex', // Ensures the icon is properly aligned with the text
                        alignItems: 'center', // Vertically aligns items
                        '&:hover': {
                            backgroundColor: "white", // Light white background on hover
                            color: "black",
                            borderColor: "white", // Border color on hover
                            '& .MuiSvgIcon-root': { // Targets the icon within the button
                                color: 'black', // Icon color on hover
                            },
                        },
                    }}>Download Resume <DownloadIcon sx={{ ml: 1 }} /></Button>
                </Box>

                <Box
                    sx={{
                        background: 'linear-gradient(180deg, rgba(91,38,79,0.8624299719887955) 0%, rgba(51,32,96,0.8624299719887955) 100%)',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        maxWidth: 500,
                        minHeight: "100%",
                        mx: 'auto',
                        mt: 5,
                        color: 'white',
                        width: { xs: '100%', sm: '45%', md: '60%' },
                    }}
                >
                    <Typography variant="h2" component="h1" align="center" gutterBottom>
                        Say Hi!
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ style: { color: 'white' } }}
                                inputProps={{ style: { color: 'white' } }}
                                sx={{ fieldset: { borderColor: 'white' }, mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ style: { color: 'white' } }}
                                inputProps={{ style: { color: 'white' } }}
                                sx={{ fieldset: { borderColor: 'white' }, mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ style: { color: 'white' } }}
                                inputProps={{ style: { color: 'white' } }}
                                sx={{ fieldset: { borderColor: 'white' }, mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone No."
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ style: { color: 'white' } }}
                                inputProps={{ style: { color: 'white' } }}
                                sx={{ fieldset: { borderColor: 'white' }, mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                InputLabelProps={{ style: { color: 'white' } }}
                                inputProps={{ style: { color: 'white' } }}
                                sx={{ fieldset: { borderColor: 'white' }, mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'grey.300' } }}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default GetInTouchForm;
