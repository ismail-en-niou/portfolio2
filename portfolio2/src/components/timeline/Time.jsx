import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './time.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TimelineIcon from '@mui/icons-material/Timeline';
const tablle = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "Git & GitHub",
  "SQL",
  "React.js",
  "Node.js",
  "PHP",
  "Terminal Commands"
];

export default function OutlinedTimeline() {
  AOS.init({
    duration: 1200,
  })
  return (
    <Timeline data-aos="flip-down" className='test' position="alternate">
      <div style ={{ display: 'flex', gap: '.5rem', alignItems : "center"}}>
        <TimelineIcon />
        <h1>technologies</h1>
      </div>
      {tablle.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator >
            <TimelineDot data-aos="fade-right" variant="outlined" />
            {index < tablle.length - 1 && <TimelineConnector data-aos="fade-left" />}
          </TimelineSeparator>
          <TimelineContent data-aos="zoome-out" className='test1'>{item}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
