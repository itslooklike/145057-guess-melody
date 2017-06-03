export default {
  general: {
    appName: `Угадай мелодию`,
  },
  pages: {
    welcome: {
      title: `Правила игры`,
      subtitle: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`,
    },
    levelArtist: {
      title: `Кто исполняет эту песню?`,
    },
    levelGenre: {
      title: `Выберите инди-рок треки`,
      answers: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
      ],
    },
    resultSuccess: {
      title: `Вы настоящий меломан!`,
      stats: {
        time: 2,
        melodyCount: 4,
      },
      btnText: `Сыграть ещё раз`,
      winRate: 80,
    },
    resultFalse: {
      title: `Вы проиграли`,
      stat: `Ничего, вам повезет в следующий раз`,
      btnText: `Сыграть ещё раз`,
    },
  },
  songs: [
    {name: `Пелагея`, imgSrc: `http://lorempixel.com/400/200`, value: 1},
    {name: `Краснознаменная дивизия имени моей бабушки`, imgSrc: `http://lorempixel.com/300/200`, value: 2},
    {name: `Lorde`, imgSrc: `http://lorempixel.com/200/200`, value: 3},
  ],
  time: {
    startMinutes: `02`,
    startSeconds: `00`
  }
};
