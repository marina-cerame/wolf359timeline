/* global episodes */

const season3 = {
  start_date: { year: 2015, month: 3, day: 21 },
  end_date: { year: 2016, month: 5, day: 11 },
  text: { headline: 'Season 3' },
};

let panPanText = '<small>Written by Gabriel Urbina</small> <br>';
panPanText += '';

const panPan = {
  start_date: { year: 2015, month: 7, day: 15 },
  text: {
    headline: 'Pan-Pan',
    text: panPanText,
  },
};

let maydayText = '<small>Written by Gabriel Urbina</small> <br>';
maydayText += '';

const mayday = {
  start_date: { year: 2015, month: 3, day: 21, hour: 18 },
  end_date: { year: 2015, month: 9, day: 30 },
  text: {
    headline: 'Mayday',
    text: maydayText,
  },
  display_date: 'March 21, 2015 – September 30, 2015',
};

let securiteText = '<small>Written by Gabriel Urbina</small> <br>';
securiteText += '';

const securite = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Sécurité',
    text: securiteText,
  },
};

let demolitionText = '<small>Written by Gabriel Urbina</small> <br>';
demolitionText += '';

const demolition = {
  start_date: { year: 2015, month: 10, day: 16 },
  end_date: { year: 2015, month: 10, day: 25 },
  text: {
    headline: 'Controlled Demolition',
    text: demolitionText,
  },
  display_date: 'October 16, 2015 – October 25, 2015*',
};

let bearText = '<small>Written by Sarah Shachat</small> <br>';
bearText += '';

const bear = {
  start_date: { year: 2015, month: 11, day: 30 },
  text: {
    headline: 'Don\'t Poke the Bear',
    text: bearText,
  },
};

let perspectiveText = '<small>Written by Gabriel Urbina</small> <br>';
perspectiveText += '';

const perspective = {
  start_date: { year: 2015, month: 12, day: 24 },
  end_date: { year: 2015, month: 12, day: 25 },
  text: {
    headline: 'A Matter of Perspective',
    text: perspectiveText,
  },
};

let needToKnowText = '<small>Written by Gabriel Urbina</small> <br>';
needToKnowText += '';

const needToKnow = {
  start_date: { year: 2016, month: 1, day: 6 },
  end_date: { year: 2016, month: 1, day: 7 },
  text: {
    headline: 'Need to Know',
    text: needToKnowText,
  },
};

let brimstoneText = '<small>Written by Emma Sherr-Ziarko</small> <br>';
brimstoneText += '';

const brimstone = {
  start_date: { year: 2016, month: 1, day: 21 },
  text: {
    headline: 'Fire and Brimstone',
    text: brimstoneText,
  },
  display_date: 'January 21, 2016*',
};

let overtureText = '<small>Written by Sarah Shachat</small> <br>';
overtureText += '';

const overture = {
  start_date: { year: 2016, month: 2, day: 8 },
  end_date: { year: 2016, month: 2, day: 10 },
  text: {
    headline: 'Overture',
    text: overtureText,
  },
};

let happyEndingsText = '<small>Written by Gabriel Urbina</small> <br>';
happyEndingsText += '';

const happyEndings = {
  start_date: { year: 2016, month: 2, day: 28 },
  end_date: { year: 2016, month: 3, day: 1 },
  text: {
    headline: 'Happy Endings',
    text: happyEndingsText,
  },
};

let consideredText = '<small>Written by Sarah Shachat</small> <br>';
consideredText += '';

const considered = {
  start_date: { year: 2016, month: 3, day: 12 },
  text: {
    headline: 'All Things Considered',
    text: consideredText,
  },
};

let limboText = '<small>Written by Sarah Shachat</small> <br>';
limboText += '';

const limbo = {
  start_date: { year: 2016, month: 3, day: 30 },
  text: {
    headline: 'Limbo',
    text: limboText,
  },
};

let memoriaText = '<small>Written by Gabriel Urbina</small> <br>';
memoriaText += '';

const memoria = {
  start_date: { year: 2016, month: 3, day: 30 },
  end_date: { year: 2016, month: 4, day: 1 },
  text: {
    headline: 'Memoria',
    text: memoriaText,
  },
};

let timeToKillText = '<small>Written by Sarah Shachat</small> <br>';
timeToKillText += '';

const timeToKill = {
  start_date: { year: 2016, month: 4, day: 26 },
  text: {
    headline: 'Time to Kill',
    text: timeToKillText,
  },
};

let persuasionText = '<small>Written by Zach Valenti</small> <br>';
persuasionText += '';

const persuasion = {
  start_date: { year: 2016, month: 5, day: 9 },
  text: {
    headline: 'Persuasion',
    text: persuasionText,
  },
};

let desperateTimesText = '<small>Written by Gabriel Urbina</small> <br>';
desperateTimesText += '';

const desperateTimes = {
  start_date: { year: 2016, month: 5, day: 10 },
  text: {
    headline: 'Desperate Times',
    text: desperateTimesText,
  },
};

let desperateMeasuresText = '<small>Written by Gabriel Urbina</small> <br>';
desperateMeasuresText += '';

const desperateMeasures = {
  start_date: { year: 2016, month: 5, day: 10 },
  text: {
    headline: 'Desperate Measures',
    text: desperateMeasuresText,
  },
};

let boleroText = '<small>Written by Gabriel Urbina</small> <br>';
boleroText += '';

const bolero = {
  start_date: { year: 2016, month: 5, day: 11 },
  text: {
    headline: 'Boléro',
    text: boleroText,
  },
};

episodes = episodes.concat([
  panPan,
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
