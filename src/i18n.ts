import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        emailMe: 'Email Me',
        aboutAbout: 'About',
        aboutMe: 'me',
        aboutTextFirst: `I'm 21 years old enthusiastic computer science student and frontend
            developer from IThub College, based in Moscow, with more than one year of
            commertial experience in web development. Looking to deliver
            excellent web development skills in JavaScript and TypeScript to
            help grow the business. Also I was learning Python and Java in the
            college.`,
        aboutTextSecond: `I decided to become a programmer after I passed the exams for
            the universities to become a translator, but I accidentally pressed
            on play button of learning video about HTML, CSS and JavaScript and
            it became extremely interesting for me. So right before sending
            documents to the universities I decided to become a pro at
            programming. I went to private IT college called ITHub College and
            assigned a goal to become a Middle Programmer on my graduation.
            After 1.5 year of hard working, learning and successes of my team
            project, I got my first job as junior frontend developer. It helped
            me to get a lot of hard and soft skills. And now I'm searhing for
            new experience and goals to be achieved.`,
        collegeEducation: 'Private college education',
        collegeExperienceRange: 'Jan 2022 - Feb 2023',
        collegeExperience: '(1 year, 2 months)',
        articles: 'My articles',
        read: 'Read',
        send: 'Send',
        // eslint-disable-next-line quotes
        letsCreate: "Let's create",
        digitalProdicts: 'digital products',
        together: 'together!',
        whatIUse: 'What I use',
        whatICreated: 'What I created',
        swipe: 'Swipe',
      },
    },
    ru: {
      translation: {
        emailMe: 'Написать мне',
        aboutAbout: 'Обо',
        aboutMe: 'мне',
        aboutTextFirst: `Я студент-энтузиаст в области 
        информационных технологий и Middle Frontend-разработчиком, 
        разрабатываю корпоративные сервисы и проекты, использую навыки 
        JavaScript и TypeScript для развития бизнеса.`,
        aboutTextSecond: `Изначально хотел поступил на переводчика,
        но стал студентом-программистом после сдачиаменов для поступления
        в московский лингвистический университет МГЛУ. Я наткнулся на видео
        о HTML, CSS и JavaScript, и меня это заинтересовало.
        Поэтому перед отправкой документов в университеты,
        я решил стать профессионалом в программировании,
        поэтому пошел в частный колледж ITHub College и поставил перед собой цель
        стать Middle программистом к защите диплома. Я после полутора лет усердной работы,
        успехов в учебе и нашей командной работы над проектом, получил первую работу
        Junior Frontend-разработчика. Это помогло получить множество хард и софт навыков,
        которые помогают реализовывать проекты. Я ищу новый опыт и новые цели, которые хочу достичь.`,
        collegeEducation: 'Обучение в частном колледже',
        collegeExperienceRange: 'Янв 2022 - Фев 2023',
        collegeExperience: '(1 год, 2 месяца)',
        articles: 'Мои статьи',
        read: 'Читать',
        send: 'Отправить',
        letsCreate: 'Давайте создавать',
        digitalProdicts: 'цифровые проекты',
        together: 'вместе!',
        whatIUse: 'Что я использую',
        whatICreated: 'Что я создал',
        languages: 'Языки',
        testing: 'Тестирование',
        database: 'Базы данных',
        swipe: 'Свайп',
      },
    },
  },
});

export default i18n;
