// У вас є два об'єкти:
// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }
// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }
// Створіть новий тип даних, який підходить для цих двох об'єктів.

type User = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close"; //string;nабо можна використати цей запис "open" | "close" для більш строгої перевірки між двома значеннями
  details?: {
    createAt: Date; //Об'єкт Date АБО
    updateAt?: Date; // Мітка часу (timestamp) у мілісекундах
  };
};

const page1: User = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: User = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
