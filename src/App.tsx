import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/shared/theme';
import HomePage from './pages/Home/HomePage';
import BooksPage from './pages/Books/BooksPage';
import DiagramPage from './pages/Diagram/DiagramPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Appbar from './components/shared/Appbar';
import './styles/shared/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/diagram" element={<DiagramPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
