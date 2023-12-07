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
        aboutTextFirst: `My name is Yan.
            I graduated from one of the top private IT colleges in Russia - 
            IThub College (ranked 30th among ed-tech companies).
            Currently, I work as a Middle Frontend Developer, I aspire to progress 
            and advance my skills to become a Lead Frontend Developer.`,
        aboutTextSecond: `I have experience in commercial development, conducting code reviews and working in a team.
            I can apply my skills and experience to fulfill my duties. 
            I am able to solve problems on my own and collaborate effectively in a team. 
            In addition to work, I like to write articles on IT topics and work on personal projects. 
            One of my articles has received over 40,000 views in less than a month. 
            I understand the importance of being a unique specialist in today's market, 
            ready to solve a variety of tasks. Therefore, starting from my second year in college,
            I began to study backend development, DevOps, testing and improve my software and hard skills. 
            My personal goal is to achieve significant success in the IT field and become one of the leaders in the industry.`,
        collegeEducation: 'Private college education',
        collegeExperienceRange: 'Jan 2022 - Apr 2023',
        collegeExperience: '(1 year, 4 months)',
        ammcExperienceRange: 'Jun 2023 - current',
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
        aboutTextFirst: `
        Меня зовут Ян.
        Я окончил один из лучших частных колледжей информационных технологий в России - IThub College
        (занимающий 30-е место среди компаний в области образования и технологий).
        В настоящее время я работаю Middle Frontend Разработчиком и стремлюсь
        развивать свои навыки и продвигаться к позиции Lead Frontend.`,
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
        collegeExperienceRange: 'Янв 2022 - Апр 2023',
        collegeExperience: '(1 год, 4 месяца)',
        ammcExperienceRange: 'Июнь 2023 - по н.в.',
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
