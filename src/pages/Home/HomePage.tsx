import { Box, Typography, Paper } from '@mui/material';
import { MenuBook } from '@mui/icons-material';
import DecisionTree from '../../components/shared/DecisionTree';
import './HomePage.css';

export default function HomePage() {
  return (
    <Box className="home-page fade-in">
      <Paper className="hero-section" elevation={0}>
        <Typography variant="h1" component="h1" className="hero-title" gutterBottom>
          <MenuBook sx={{ fontSize: 'inherit', mr: 2 }} />
          Find Your Perfect Book
        </Typography>
        <Typography variant="body1" className="hero-description">
          Let us guide you to your next great read! Answer a few simple questions 
          and we'll recommend a book that matches your mood and interests.
        </Typography>
      </Paper>
      
      <DecisionTree />
    </Box>
  );
} 