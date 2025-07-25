import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  Link as MuiLink
} from '@mui/material';
import { LibraryBooks, Psychology } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { books } from '../../data/books';
import './BooksPage.css';

export default function BooksPage() {
  const bookList = Object.values(books);

  return (
    <Box className="books-page fade-in">
      <Paper className="books-header" elevation={0}>
        <Typography variant="h1" component="h1" className="books-title" gutterBottom>
          <LibraryBooks sx={{ fontSize: 'inherit', mr: 2 }} />
          Our Book Collection
        </Typography>
        <Typography variant="body1" className="books-description">
          Browse through our carefully curated collection of {bookList.length} books. 
          Each one is waiting to be your next great read!
        </Typography>
      </Paper>
      
      <Grid container spacing={3} className="books-grid">
        {bookList.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="book-card">
              <CardContent>
                <Typography variant="h6" component="h3" className="book-card-title" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="body2" className="book-card-description">
                  {book.description.split('\n\n')[0]}
                  {book.description.split('\n\n').length > 1 && '...'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Paper className="books-footer" elevation={0}>
        <Typography variant="body1" textAlign="center">
          Want a personalized recommendation? 
          <MuiLink component={Link} to="/" sx={{ ml: 1, display: 'inline-flex', alignItems: 'center' }}>
            <Psychology sx={{ fontSize: '1.2rem', mr: 0.5 }} />
            Take our quiz!
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
} 