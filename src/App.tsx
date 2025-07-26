import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Home, LibraryBooks } from '@mui/icons-material';
import { theme } from './styles/shared/theme';
import HomePage from './pages/Home/HomePage';
import BooksPage from './pages/Books/BooksPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import './styles/shared/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={Link}
                to="/"
                startIcon={<Home />}
                sx={{ color: 'text.primary' }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/books"
                startIcon={<LibraryBooks />}
                sx={{ color: 'text.primary' }}
              >
                Books
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
