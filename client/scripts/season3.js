/* global episodes */

const season3 = {
  start_date: { year: 2015, month: 3, day: 21 },
  end_date: { year: 2016, month: 5, day: 11 },
  text: { headline: 'Season 3' },
};

const panpan = {
  start_date: { year: 2015, month: 7, day: 15 },
  text: {
    headline: 'Pan-Pan',
    text: 'test test test',
  },
};

const mayday = {
  start_date: { year: 2015, month: 3, day: 21, hour: 18 },
  end_date: { year: 2015, month: 9, day: 30 },
  text: {
    headline: 'Mayday',
    text: 'test test test',
  },
  display_date: 'March 21, 2015 – September 30, 2015',
};

const securite = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Sécurité',
    text: 'test test test',
  },
};

const demolition = {
  start_date: { year: 2015, month: 10, day: 16 },
  end_date: { year: 2015, month: 10, day: 25 },
  text: {
    headline: 'Controlled Demolition',
    text: 'test test test <br><small>* Estimated</small>',
  },
  display_date: 'October 16, 2015 – October 25, 2015*',
};

const bear = {
  start_date: { year: 2015, month: 11, day: 30 },
  text: {
    headline: 'Don\'t Poke the Bear',
    text: 'test test test',
  },
};

const perspective = {
  start_date: { year: 2015, month: 12, day: 24 },
  end_date: { year: 2015, month: 12, day: 25 },
  text: {
    headline: 'A Matter of Perspective',
    text: 'test test test',
  },
};

const needToKnow = {
  start_date: { year: 2016, month: 1, day: 6 },
  end_date: { year: 2016, month: 1, day: 7 },
  text: {
    headline: 'Need to Know',
    text: 'test test test',
  },
};

const brimstone = {
  start_date: { year: 2016, month: 1, day: 21 },
  text: {
    headline: 'Fire and Brimstone',
    text: 'test test test <br><small>* Estimated</small>',
  },
  display_date: 'January 21, 2016*',
};

const overture = {
  start_date: { year: 2016, month: 2, day: 8 },
  end_date: { year: 2016, month: 2, day: 10 },
  text: {
    headline: 'Overture',
    text: 'test test test',
  },
};

const happyEndings = {
  start_date: { year: 2016, month: 2, day: 28 },
  end_date: { year: 2016, month: 3, day: 1 },
  text: {
    headline: 'Happy Endings',
    text: 'test test test',
  },
};

const considered = {
  start_date: { year: 2016, month: 3, day: 12 },
  text: {
    headline: 'All Things Considered',
    text: 'test test test',
  },
};

const limbo = {
  start_date: { year: 2016, month: 3, day: 30 },
  text: {
    headline: 'Limbo',
    text: 'test test test',
  },
};

const memoria = {
  start_date: { year: 2016, month: 3, day: 30 },
  end_date: { year: 2016, month: 4, day: 1 },
  text: {
    headline: 'Memoria',
    text: 'test test test',
  },
};

const timeToKill = {
  start_date: { year: 2016, month: 4, day: 26 },
  text: {
    headline: 'Time to Kill',
    text: 'test test test',
  },
};

const persuasion = {
  start_date: { year: 2016, month: 5, day: 9 },
  text: {
    headline: 'Persuasion',
    text: 'test test test',
  },
};

const desperateTimes = {
  start_date: { year: 2016, month: 5, day: 10 },
  text: {
    headline: 'Desperate Times',
    text: 'test test test',
  },
};

const desperateMeasures = {
  start_date: { year: 2016, month: 5, day: 10 },
  text: {
    headline: 'Desperate Measures',
    text: 'test test test',
  },
};

const bolero = {
  start_date: { year: 2016, month: 5, day: 11 },
  text: {
    headline: 'Boléro',
    text: 'test test test',
  },
};

episodes = episodes.concat([
  panpan,
  mayday,
  securite,
  demolition,
  bear,
  perspective,
  needToKnow,
  brimstone,
  overture,
  happyEndings,
  considered,
  limbo,
  memoria,
  timeToKill,
  persuasion,
  desperateTimes,
  desperateMeasures,
  bolero,
]);
