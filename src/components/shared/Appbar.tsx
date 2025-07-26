import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Home, LibraryBooks } from '@mui/icons-material';

function Appbar() {
  return (
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
  );
}

export default Appbar;