export interface DecisionNode {
  id: string;
  type: 'question' | 'book';
  text: string;
  options?: {
    text: string;
    next: string;
  }[];
  bookTitle?: string;
}

export const decisionTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    type: 'question',
    text: 'Fiction or Non-Fiction?',
    options: [
      { text: 'Fiction', next: 'ficq' },
      { text: 'Non-Fiction', next: 'nonficq' }
    ]
  },
  
  // Fiction Branch
  ficq: {
    id: 'ficq',
    type: 'question',
    text: 'What kind of story?',
    options: [
      { text: 'Light-hearted', next: 'lightq' },
      { text: 'Visual storytelling', next: 'book_loving_reaper' }
    ]
  },
  
  lightq: {
    id: 'lightq',
    type: 'question',
    text: 'Sci-fi or coming-of-age?',
    options: [
      { text: 'Space adventure', next: 'book_hitchhiker' },
      { text: 'Coming-of-age', next: 'book_sky_blues' }
    ]
  },
  
  // Non-Fiction Branch
  nonficq: {
    id: 'nonficq',
    type: 'question',
    text: 'What interests you most?',
    options: [
      { text: 'Philosophy', next: 'philq' },
      { text: 'Language', next: 'langq' },
      { text: 'Essays', next: 'essayq' },
      { text: 'How the World Works', next: 'worldq' },
      { text: 'Memoir', next: 'book_caged_bird' },
      { text: 'Business', next: 'book_pumpkin_plan' }
    ]
  },
  
  // Philosophy Branch
  philq: {
    id: 'philq',
    type: 'question',
    text: 'Eastern, western, or modern ethics?',
    options: [
      { text: 'Eastern', next: 'book_tao_te_ching' },
      { text: 'Western', next: 'book_rebel' },
      { text: 'Modern ethics', next: 'book_how_perfect' }
    ]
  },
  
  // Language Branch
  langq: {
    id: 'langq',
    type: 'question',
    text: 'Emotions, concepts, or storytelling?',
    options: [
      { text: 'Emotions', next: 'book_atlas_heart' },
      { text: 'Concepts', next: 'book_obscure_sorrows' },
      { text: 'Storytelling', next: 'book_science_story' }
    ]
  },
  
  // Essays Branch
  essayq: {
    id: 'essayq',
    type: 'question',
    text: 'Life or economy?',
    options: [
      { text: 'Life', next: 'book_anthropocene' },
      { text: 'Economy', next: 'book_zombies' }
    ]
  },
  
  // How the World Works Branch
  worldq: {
    id: 'worldq',
    type: 'question',
    text: 'Economics or power dynamics?',
    options: [
      { text: 'Economics', next: 'econq' },
      { text: 'Power dynamics', next: 'powerq' }
    ]
  },
  
  econq: {
    id: 'econq',
    type: 'question',
    text: 'Hidden patterns or development?',
    options: [
      { text: 'Hidden patterns', next: 'book_freakonomics' },
      { text: 'Development', next: 'book_prosperity' }
    ]
  },
  
  powerq: {
    id: 'powerq',
    type: 'question',
    text: 'Politics or global systems?',
    options: [
      { text: 'Politics', next: 'book_dictator' },
      { text: 'Global systems', next: 'book_principles' }
    ]
  },
  
  // Book recommendations
  book_hitchhiker: {
    id: 'book_hitchhiker',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Hitchhiker\'s Guide to the Galaxy'
  },
  
  book_sky_blues: {
    id: 'book_sky_blues',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Sky Blues'
  },
  
  book_loving_reaper: {
    id: 'book_loving_reaper',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'Loving Reaper'
  },
  
  book_tao_te_ching: {
    id: 'book_tao_te_ching',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'Tao Te Ching'
  },
  
  book_rebel: {
    id: 'book_rebel',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Rebel'
  },
  
  book_how_perfect: {
    id: 'book_how_perfect',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'How to Be Perfect'
  },
  
  book_atlas_heart: {
    id: 'book_atlas_heart',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'Atlas of the Heart'
  },
  
  book_obscure_sorrows: {
    id: 'book_obscure_sorrows',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Dictionary of Obscure Sorrows'
  },
  
  book_science_story: {
    id: 'book_science_story',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Science of Storytelling'
  },
  
  book_anthropocene: {
    id: 'book_anthropocene',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Anthropocene Reviewed'
  },
  
  book_zombies: {
    id: 'book_zombies',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'Arguing with Zombies'
  },
  
  book_freakonomics: {
    id: 'book_freakonomics',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'Freakonomics'
  },
  
  book_prosperity: {
    id: 'book_prosperity',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Prosperity Paradox'
  },
  
  book_dictator: {
    id: 'book_dictator',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Dictator\'s Handbook'
  },
  
  book_principles: {
    id: 'book_principles',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'Principles for Dealing with the Changing World Order'
  },
  
  book_caged_bird: {
    id: 'book_caged_bird',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'I Know Why the Caged Bird Sings'
  },
  
  book_pumpkin_plan: {
    id: 'book_pumpkin_plan',
    type: 'book',
    text: 'Perfect match!',
    bookTitle: 'The Pumpkin Plan'
  }
}; 