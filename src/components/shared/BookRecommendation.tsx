import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Stack,
  Divider
} from '@mui/material';
import { ArrowBack, Refresh, MenuBook, Casino } from '@mui/icons-material';
import { Book } from '../../data/books';
import './BookRecommendation.css';

interface BookRecommendationProps {
  book: Book;
  onRestart: () => void;
  onGoBack: () => void;
  canGoBack: boolean;
  isRandom?: boolean;
}

export default function BookRecommendation({ 
  book, 
  onRestart, 
  onGoBack, 
  canGoBack, 
  isRandom = false 
}: BookRecommendationProps) {
  return (
    <Box className="book-recommendation fade-in">
      <Paper className="recommendation-container" elevation={0}>
        <Box className="recommendation-header" textAlign="center" mb={3}>
          {isRandom ? (
            <Typography variant="h2" component="h2" className="recommendation-title">
              <Casino sx={{ fontSize: 'inherit', mr: 1 }} />
              Random Pick!
            </Typography>
          ) : (
            <Typography variant="h2" component="h2" className="recommendation-title">
              <MenuBook sx={{ fontSize: 'inherit', mr: 1 }} />
              Perfect Match!
            </Typography>
          )}
        </Box>
        
        <Box className="book-details">
          <Typography variant="h3" component="h3" className="book-title" gutterBottom>
            {book.title}
          </Typography>
          
          <Box className="book-description">
            {book.description.split('\n\n').map((paragraph, index) => (
              <Typography key={index} variant="body1" paragraph>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Stack direction="row" spacing={2} justifyContent="center" className="action-buttons">
          {canGoBack && (
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={onGoBack}
            >
              Try Different Answer
            </Button>
          )}
          
          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={onRestart}
          >
            Find Another Book
          </Button>
        </Stack>
        
        <Box className="recommendation-footer" textAlign="center" mt={3}>
          <Typography variant="body2" color="text.secondary" fontStyle="italic">
            {isRandom 
              ? "Sometimes the best discoveries come from unexpected choices!"
              : "This book matches your preferences based on your answers."
            }
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
} 