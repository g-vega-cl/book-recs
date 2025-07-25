import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Chip, 
  Stack 
} from '@mui/material';
import { ArrowBack, Refresh } from '@mui/icons-material';
import { decisionTree } from '../../data/decisionTree';
import { books } from '../../data/books';
import BookRecommendation from './BookRecommendation';
import './DecisionTree.css';

export default function DecisionTree() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [history, setHistory] = useState<string[]>(['start']);

  const currentNode = decisionTree[currentNodeId];

  const handleOptionClick = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
    setHistory(prev => [...prev, nextNodeId]);
  };

  const handleRestart = () => {
    setCurrentNodeId('start');
    setHistory(['start']);
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousNodeId = newHistory[newHistory.length - 1];
      setCurrentNodeId(previousNodeId);
      setHistory(newHistory);
    }
  };

  // Handle book recommendation display
  if (currentNode.type === 'book') {
    const book = books[currentNode.bookTitle!];
    return (
      <BookRecommendation 
        book={book} 
        onRestart={handleRestart}
        onGoBack={handleGoBack}
        canGoBack={history.length > 1}
      />
    );
  }

  // Handle question display
  return (
    <Box className="decision-tree fade-in">
      <Paper className="question-container" elevation={0}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Chip 
            label={`Question ${history.length}`}
            color="primary"
            variant="filled"
          />
        </Box>
        
        <Typography variant="h3" component="h2" className="question-text" gutterBottom>
          {currentNode.text}
        </Typography>
        
        <Stack spacing={2} className="options-container">
          {currentNode.options?.map((option, index) => (
            <Button
              key={index}
              variant="contained"
              size="large"
              onClick={() => handleOptionClick(option.next)}
              className="option-button"
            >
              {option.text}
            </Button>
          ))}
        </Stack>
        
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          {history.length > 1 && (
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={handleGoBack}
            >
              Go Back
            </Button>
          )}
          
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={handleRestart}
          >
            Start Over
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
} 