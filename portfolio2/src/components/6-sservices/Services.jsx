import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './services.css'

  
const table_of_services = [
    {
        title: "Testing and Debugging",
        description: "Ensure your application runs smoothly with thorough testing and debugging.",
        imageUrl: "data:image/png;base64,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" // Replace with actual image URL
    },
    {
        title: "Optimization and Performance",
        description: "Enhance your application's speed and efficiency through optimization techniques.",
        imageUrl: "https://th.bing.com/th/id/OIP.7vvE1M2AlKxgluWWaXK95wHaDt?w=317&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with actual image URL
    },
    {
        title: "Client-Side Logic",
        description: "Implement robust client-side logic to enhance user interaction and experience.",
        imageUrl: "https://th.bing.com/th/id/OIP.8GohYEKNUPLsa4BlUUxe7wHaC7?pid=ImgDet&w=203&h=80&c=7&dpr=1.3" // Replace with actual image URL
    },
    {
        title: "Front-end Development",
        description: "Craft intuitive and responsive user interfaces with modern front-end frameworks.",
        imageUrl: "https://th.bing.com/th/id/OIP.UchThK8CDHXqL06wShr7-wHaDt?w=339&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with actual image URL
    },
    {
        title: "User Interface (UI) Design",
        description: "Create visually appealing and user-friendly interfaces that captivate users.",
        imageUrl: "https://th.bing.com/th/id/OIP.z3RgLawXAYKytrnOPApN4AHaDt?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with actual image URL
    }
];

const Services = () => {
    AOS.init({
        duration: 1200,
      })
    return (
    <div  style ={{ display: 'flex', gap: '3rem', flexDirection : "column" }}>
      <div style ={{ display: 'flex', gap: '.5rem', alignItems : "center"}}>
        <DesignServicesIcon />
        <h1> Services </h1>
      </div>
        <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
           
            {table_of_services.map((service, index) => (
                <Card  data-aos="zoom-in" className='card' key={index} sx={{ maxWidth: 345 }}>
                    <CardHeader className='text'
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                IS
                            </Avatar>
                        }
                        title={service.title}
                        subheader={
                            <Typography className='text' variant="subtitle2" >
                                Explore what I can do for you
                            </Typography>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={service.imageUrl}
                        alt={service.title}
                    />
                    <CardContent>
                        <Typography variant="body2" className='text'>
                            {service.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
        </div>
    );
}

export default Services;
