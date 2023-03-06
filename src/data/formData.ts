export const FORM_DATA = [
  {
    title: 'Hello, I am ',
    textfield: {
      name: 'name',
      placeholder: 'enter the name',
    },
  },
  {
    title: ' from ',
    textfield: {
      name: 'company',
      // eslint-disable-next-line prettier/prettier, quotes
      placeholder: "company's name",
    },
    postfix: '. ',
  },
  {
    title: 'I would like to ',
    textfield: {
      name: 'offer',
      placeholder: 'describe the offer',
    },
    postfix: '. ',
  },
  {
    title: 'Contact me by ',
    textfield: {
      name: 'contacts',
      placeholder: 'email, telegram, social media',
    },
    postfix: '.',
  },
];
