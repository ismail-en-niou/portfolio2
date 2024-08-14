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
        imageUrl: "https://th.bing.com/th/id/OIP.JtMGl_IDD6xXaKvWe4QFhwAAAA?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with actual image URL
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
