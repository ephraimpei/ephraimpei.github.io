import { Project } from '../app/interfaces/project';
import { TECHNOLOGIES } from '../app/constants/technologies';

const {
  RUBY, RUBY_ON_RAILS, JAVASCRIPT, REACT, MONGO, CLOUDFLARE, SASS,
  AWS_S3, POSTGRESQL, SQL, PYTHON, DJANGO, ANGULAR, TYPESCRIPT, D3,
  REDUX, NODE
} = TECHNOLOGIES;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nom noms (a Yelp clone)',
    image: 'TBD...',
    'live-link': 'https://nom-noms.herokuapp.com/',
    'github-link': 'https://github.com/ephraimpei/nom-noms',
    technologies: [RUBY, RUBY_ON_RAILS, JAVASCRIPT, REACT, AWS_S3, POSTGRESQL, SQL],
    description: 'A social-themed location search and review platform based on Yelp.'
  },
  {
    id: 2,
    title: 'My Personal Website',
    image: 'TBD...',
    'live-link': 'https://www.ephraimpei.com/',
    'github-link': 'https://github.com/ephraimpei/ephraimpei.github.io',
    technologies: [ANGULAR, TYPESCRIPT, SASS, AWS_S3, CLOUDFLARE],
    description: 'Static site hosted on AWS, propagated through CloudFlare.'
  },
  {
    id: 3,
    title: 'Pomodoro To-Do List',
    image: 'TBD...',
    'live-link': 'http://pomodoro-to-do.herokuapp.com/',
    'github-link': 'https://github.com/ephraimpei/pomodoro-to-do-app',
    technologies: [PYTHON, DJANGO, JAVASCRIPT, REACT, MONGO],
    description: 'A simple to do app with pomodoro productivity features.'
  },
  {
    id: 4,
    title: 'Sales Data Visualization',
    image: 'TBD...',
    'live-link': 'http://sales-data-visualization.herokuapp.com/',
    'github-link': 'https://github.com/ephraimpei/sales-data-visualization',
    technologies: [JAVASCRIPT, D3],
    description: 'A fun treemap data visualization example using D3.'
  },
  {
    id: 5,
    title: 'VICE Video Embedded Web Player',
    image: 'TBD...',
    'live-link': 'https://video.vice.com/en_us/embed/5966713ea2ab3dfe1f4296da',
    'github-link': '[private repo]',
    technologies: [TYPESCRIPT, REACT, REDUX],
    description: 'A distributable script hosted on AWS S3 that loads the VICE Video embedded web player.'
  },
  {
    id: 6,
    title: 'VICE Video Site',
    image: 'TBD...',
    'live-link': 'https://video.vice.com',
    'github-link': '[private repo]',
    technologies: [TYPESCRIPT, REACT, REDUX, NODE],
    description: 'The only place to watch VICE Video content!'
  },
  {
    id: 7,
    title: 'Weather Forecast',
    image: 'TBD...',
    'live-link': 'https://ephraimpei-weather-forecast.herokuapp.com/',
    'github-link': 'https://github.com/ephraimpei/weather-forecast',
    technologies: [JAVASCRIPT, REACT, D3],
    description: 'Responsive single page weather forecast app.'
  }
];