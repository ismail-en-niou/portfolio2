import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/">
        <Button variant="contained" endIcon={<HomeIcon />}>
          Go back to Home
        </Button>
      </Link>
    </Stack>
  );
}
