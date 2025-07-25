import { Box, Typography, Button, Paper } from '@mui/material';
import { Home, SearchOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <Box className="not-found-page fade-in">
      <Paper className="not-found-container" elevation={0}>
        <SearchOff sx={{ fontSize: '5rem', color: 'text.secondary', mb: 2 }} />
        
        <Typography variant="h2" component="h1" gutterBottom>
          Page Not Found
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Oops! The page you're looking for doesn't exist. 
          Let's get you back to finding your perfect book.
        </Typography>
        
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          startIcon={<Home />}
        >
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
} 