export enum TECHNOLOGIES {
  RUBY = 'ruby',
  RUBY_ON_RAILS = 'ruby-on-rails',
  JAVASCRIPT = 'javascript',
  REACT = 'react',
  AWS_S3 = 'aws-s3',
  POSTGRESQL = 'postgresql',
  SQL = 'sql',
  PYTHON = 'python',
  DJANGO = 'django',
  MONGO = 'mongo',
  CLOUDFLARE = 'cloudflare',
  ANGULAR = 'angular',
  TYPESCRIPT = 'typescript',
  SASS = 'sass',
  D3 = 'd3',
  REDUX = 'redux',
  NODE = 'node',
  CSS3 = 'css3',
  HTML5 = 'html5',
  STYLUS = 'stylus',
  TRAVIS = 'travis-ci',
  WEBPACK = 'webpack',
  BROWSERIFY = 'browserify',
}

export const TECHNOLOGY_METADATA: {
  [key: string]: {
    svg: string;
    href: string;
  }
} = {
  [`${TECHNOLOGIES.RUBY}`]: {
    svg: 'assets/svg/ruby.svg',
    href: 'https://www.ruby-lang.org',
  },
  [`${TECHNOLOGIES.RUBY_ON_RAILS}`]: {
    svg: 'assets/svg/ruby-on-rails.svg',
    href: 'http://rubyonrails.org/',
  },
  [`${TECHNOLOGIES.JAVASCRIPT}`]: {
    svg: 'assets/svg/javascript.svg',
    href: 'https://www.javascript.com/',
  },
  [`${TECHNOLOGIES.REACT}`]: {
    svg: 'assets/svg/react.svg',
    href: 'https://reactjs.org/',
  },
  [`${TECHNOLOGIES.AWS_S3}`]: {
    svg: 'assets/svg/aws-s3.svg',
    href: 'https://aws.amazon.com/s3/',
  },
  [`${TECHNOLOGIES.POSTGRESQL}`]: {
    svg: 'assets/svg/postgresql.svg',
    href: 'https://www.postgresql.org/',
  },
  [`${TECHNOLOGIES.SQL}`]: {
    svg: 'assets/svg/sql.svg',
    href: 'https://www.mysql.com/',
  },
  [`${TECHNOLOGIES.PYTHON}`]: {
    svg: 'assets/svg/python.svg',
    href: 'https://www.python.org/',
  },
  [`${TECHNOLOGIES.DJANGO}`]: {
    svg: 'assets/svg/django.svg',
    href: 'https://www.djangoproject.com/',
  },
  [`${TECHNOLOGIES.MONGO}`]: {
    svg: 'assets/svg/mongo.svg',
    href: 'https://www.mongodb.com/',
  },
  [`${TECHNOLOGIES.CLOUDFLARE}`]: {
    svg: 'assets/svg/cloudflare.svg',
    href: 'https://www.cloudflare.com/',
  },
  [`${TECHNOLOGIES.ANGULAR}`]: {
    svg: 'assets/svg/angular.svg',
    href: 'https://angular.io/',
  },
  [`${TECHNOLOGIES.TYPESCRIPT}`]: {
    svg: 'assets/svg/typescript.svg',
    href: 'https://www.typescriptlang.org/',
  },
  [`${TECHNOLOGIES.SASS}`]: {
    svg: 'assets/svg/sass.svg',
    href: 'http://sass-lang.com/',
  },
  [`${TECHNOLOGIES.D3}`]: {
    svg: 'assets/svg/d3.svg',
    href: 'https://d3js.org/',
  },
  [`${TECHNOLOGIES.REDUX}`]: {
    svg: 'assets/svg/redux.svg',
    href: 'https://redux.js.org/',
  },
  [`${TECHNOLOGIES.NODE}`]: {
    svg: 'assets/svg/node.svg',
    href: 'https://nodejs.org',
  },
  [`${TECHNOLOGIES.CSS3}`]: {
    svg: 'assets/svg/css3.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
  },
  [`${TECHNOLOGIES.HTML5}`]: {
    svg: 'assets/svg/html5.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  [`${TECHNOLOGIES.STYLUS}`]: {
    svg: 'assets/svg/stylus.svg',
    href: 'http://stylus-lang.com/',
  },
  [`${TECHNOLOGIES.TRAVIS}`]: {
    svg: 'assets/svg/travis-ci.svg',
    href: 'https://travis-ci.com/',
  },
  [`${TECHNOLOGIES.WEBPACK}`]: {
    svg: 'assets/svg/webpack.svg',
    href: 'https://webpack.js.org/',
  },
  [`${TECHNOLOGIES.BROWSERIFY}`]: {
    svg: 'assets/svg/browserify.svg',
    href: 'http://browserify.org/',
  },
};
