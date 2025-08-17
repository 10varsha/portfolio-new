export const projects = [
  // --- AI/ML & GenAI ---
  {
    title: 'Food Recommendation System',
    tagline: 'Configurable collaborative filtering engine for personalized food suggestions.',
    description: 'Built modular CF pipeline with dataset switching and hyperparameter tuning; reproducible via versioned experiments.',
    stack: ['Python','Pandas','Scikit-learn'],
    category: 'AI/ML',
    filterTags: ['AI/ML'],
    github: 'https://github.com/10varsha/Food-Recommendation-System-using-Machine-Leaning',
    demo: '#'
  },
  {
    title: 'Vehicle Detection System',
    tagline: 'High-precision vehicle detection with Faster R-CNN + transfer learning.',
    description: 'Runtime-configurable model, input, and output params. Iterated through 20+ retraining cycles with strict versioning.',
    stack: ['PyTorch','Faster R-CNN','OpenCV'],
    category: 'AI/ML',
    filterTags: ['AI/ML'],
    github: 'https://github.com/10varsha/vehicle-detection-stystem',
    demo: '#'
  },
  {
    title: 'OpenAI Article Summarizer',
    tagline: 'One-click long-form summarization using GPT API with clean UI.',
    description: 'LLM integration + safety guardrails for robust outputs; supports multiple article sources.',
    stack: ['OpenAI API','React','Node'],
    category: 'GenAI',
    filterTags: ['GenAI','Web/Creative'],
    github: 'https://github.com/10varsha/Open-AI-Article-Summerizer',
    demo: 'https://openai-article-summerizer-varsha.netlify.app/'
  },
  {
    title: 'Real-Time Object Detection',
    tagline: 'OpenCV pipeline for instant object recognition from live feeds.',
    description: 'Lightweight implementation suitable for demos and rapid prototyping.',
    stack: ['OpenCV','Python'],
    category: 'AI/ML',
    filterTags: ['AI/ML'],
    github: 'https://github.com/10varsha/Object-Detection-using-openCV',
    demo: 'https://drive.google.com/file/d/15LfB9ELfc7krbeshJAFk4ebqlVaGf-5S/view'
  },
  // --- Web / Creative ---
  {
    title: '3D iPhone Website',
    tagline: 'Interactive 3D product showcase built with Three.js and GSAP.',
    description: 'Smooth camera transitions, product highlights, and responsive layout.',
    stack: ['React','Three.js','GSAP','Tailwind'],
    category: 'Web',
    filterTags: ['Web/Creative'],
    github: 'https://github.com/10varsha/3D-iPhone-website',
    demo: 'https://3d-iphone-website-omega.vercel.app/'
  },
  // --- Mini Apps ---
  {
    title: 'Alien Invaders (Game)',
    tagline: 'Canvas-based arcade shooter.',
    description: 'Built to learn game loops, collision detection, and sprites.',
    stack: ['JavaScript','HTML Canvas'],
    category: 'Mini',
    filterTags: ['Mini Apps'],
    github: 'https://github.com/10varsha/Alien-Invaders', demo: '#'
  },
  { title: 'Rock-Paper-Scissors', 
    tagline: 'Casual logic game.', 
    description: 'Focus on clean UI state.', 
    stack: ['JS','CSS'], category: 'Mini', 
    filterTags: ['Mini Apps'], 
    github:'https://github.com/10varsha/rock-paper-scissors', demo:'#' 
  },
  { title: 'Quiz Fuzz', 
    tagline: 'Quick quiz engine.', 
    description: 'Timer + scoring + categories.', 
    stack: ['JS','HTML'], category: 'Mini', 
    filterTags: ['Mini Apps'], 
    github:'https://github.com/10varsha/Quiz-Fuzz', demo:'#' 
  },
  { title: 'Maze Generator', 
    tagline: 'Procedural maze visualizer.', 
    description: 'Algorithms practice (DFS/BFS).', 
    stack: ['JS','Canvas'], category: 'Mini', 
    filterTags: ['Mini Apps'], 
    github:'https://github.com/10varsha/Maze-Generator-Game', demo:'#' 
  },
  { title: 'Web Music Player', 
    tagline: 'Playlist & controls.', 
    description: 'Local storage + audio API.', 
    stack: ['JS','Audio API'], category: 'Mini', 
    filterTags: ['Mini Apps'], 
    github:'https://github.com/10varsha/Music-Player', demo:'#' 
  },
  { title: 'Weather App', 
    tagline: 'City weather lookup.', 
    description: 'Fetches live API data with caching.', 
    stack: ['JS','Fetch'], category: 'Mini', 
    filterTags: ['Mini Apps'], 
    github:'https://github.com/10varsha/Weather-app', demo:'#' 
  },
]
