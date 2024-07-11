import { Box, Button, Link} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
function Socials(){
return(<Box sx={{
  display:"flex",
  justifyContent:"start",
  pt:4,
  pl:0,
  ml:0,
  
}}>
<Link href="" sx={
{  ml:4,
  alignSelf:"center",
}
} ><LinkedInIcon sx={{fontSize:"2rem"}}/></Link>

<Link  sx={
{  ml:4,
  alignSelf:"center",
}
} href=""><GitHubIcon sx={{fontSize:"2rem"}}/> </Link>
<Button variant="outlined"  sx={{
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
      }}>Download Resume  <DownloadIcon sx={{
          ml: 1,
        }}/></Button>
</Box>)
}
 export default Socials;