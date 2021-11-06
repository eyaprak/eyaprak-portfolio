import {
  Reactjs,
  Nodejs,
  Mongodb,
  Nextjs,
  Materialui,
  Tailwindcss,
  Auth0,
  StyledComponents,
  DarkLightTheme,
  LocalStorage,
  SocketIO,
  Expressjs,
  Flutter,
  GooglePlay,
  DownloadCount,
  Sass,
} from '../components/icons';

import CustomButton from '../components/buttons/CustomButton';

export const Projects = [
  {
    id: 1,
    title: '📝 FULL STACK TODO APP ',
    description:
      'This project created with React.js, Node.js, Express.js and MongoDB technologies. Sass used for styling elements. In this project, each user can create, delete and update their todo-list with the login system and also everyone can register to the project.',
    shortdescription: 'FULL STACK TODO LIST APP',
    image: '/images/works/todolist-app.jpg',
    icons: [<Reactjs />, <Nodejs />, <Expressjs />, <Mongodb />, <Sass />],
    buttons: [
      <CustomButton
        key='1'
        link='https://fullstack-todolist.herokuapp.com/'
        text='Site Link'
      />,
      <CustomButton
        key='2'
        link='https://github.com/eyaprak/fullstack-todoapp'
        text='Source Code'
      />,
    ],
  },
  {
    id: 2,
    title: '⚡ GETIR.COM UI DESIGN APP',
    shortdescription: 'Responsive UI Design',
    description:
      'This project created with React.js and Tailwind css technologies. Getir Company is popular in Turkey and their application uses a lot. In this project, I created clone of their homepage with responsive design.',
    image: '/images/works/getir-app.jpg',
    icons: [<Reactjs />, <Materialui />],
    buttons: [
      <CustomButton
        key='3'
        link='https://react-getir-app.netlify.app/'
        text='Site Link'
      />,
      <CustomButton
        key='4'
        link='https://github.com/eyaprak/getir.com-reactapp'
        text='Source Code'
      />,
    ],
  },
  {
    id: 3,
    title: '✨HULU.COM UI DESIGN APP',
    shortdescription: 'Responsive UI Design',
    description:
      'This project created with Next.js and Tailwind css. The movies got from themoviedb.org API. Added framer-motion library to motion elements. Hero icons library used to added icons. All design is responsive for mobile.',
    image: '/images/works/hulu-app.jpg',
    icons: [<Nextjs />, <Tailwindcss />],
    buttons: [
      <CustomButton
        key='5'
        link='https://huluapp-clone.vercel.app/'
        text='Site Link'
      />,
      <CustomButton
        key='6'
        link='https://github.com/eyaprak/huluapp-clone'
        text='Source Code'
      />,
    ],
  },
  {
    id: 4,
    title: '⚛️ GITHUB USER APP ',
    shortdescription: 'Full Stack App',
    description:
      "This project created using React.js, Auth0, Styled Component technologies. The project shows github users' follower, following, star and project counts. It also shows the Most Popular Repos, Languages and Forks with FusionCharts extension.",
    image: '/images/works/github-app.jpg',
    icons: [<Reactjs />, <Auth0 />, <StyledComponents />],
    buttons: [
      <CustomButton
        key='7'
        link='https://github-app-auth0.netlify.app/'
        text='Site Link'
      />,
      <CustomButton
        key='8'
        link='https://github.com/eyaprak/react-github-app'
        text='Source Code'
      />,
    ],
  },
  {
    id: 5,
    title: '✍️ WRITING SPEED TEST APP ',
    shortdescription: 'React.js & Context API',
    description:
      'This application was built using by React.js framework. This app includes a context api to share datas between components. You can test your writing speed with a sentence that you created. You can also switch theme to dark/light.',
    image: '/images/works/writing-speed-app.jpg',
    icons: [<Reactjs />, <DarkLightTheme />, <LocalStorage />],
    buttons: [
      <CustomButton
        key='9'
        link='https://writing-speed-app.netlify.app'
        text='Site Link'
      />,
      <CustomButton
        key='10'
        link='https://github.com/eyaprak/writing-speed'
        text='Source Code'
      />,
    ],
  },
  {
    id: 6,
    title: '💬 REAL TIME CHAT APP ',
    shortdescription: 'Node.js & Socket.io App',
    description:
      'This project has made with Node.js, Express.js, Socket.io and MongoDB technologies. This is a chat application that you can chat with others. You can see left, join and online users and you can receive a message from them in real time. You can also send a shake to „others” with a sound. The admin user, who has admin permission, can clean the all chat by click the clear msg button.',
    image: '/images/works/chat-app.jpg',
    icons: [<Nodejs />, <Expressjs />, <Mongodb />, <SocketIO />],
    buttons: [
      <CustomButton
        key='11'
        link='https://ey-chat-app.herokuapp.com/'
        text='Site Link'
      />,
      <CustomButton
        key='12'
        link='https://github.com/eyaprak/chat-app'
        text='Source Code'
      />,
    ],
  },
  {
    id: 7,
    title: '📖 CHILDREN TALE APP ',
    description:
      "This app created using Flutter/Dart technologies. There are 40 fairy tales and 10 puzzle you can listen to or read. There are also 10 voices that can help kids' sleep. It has added to Google Play Store and got more than 10k+ download since March 2021.",
    shortdescription: 'Mobile App Created With Flutter',
    image: '/images/works/flutter-mobile-app.jpg',
    icons: [<Flutter />, <GooglePlay />, <DownloadCount />],
    buttons: [
      <CustomButton
        key='13'
        link='https://play.google.com/store/apps/details?id=com.cocukdunyasi&hl=tr&gl=US'
        text='Google Play Link'
      />,
    ],
  },
];
