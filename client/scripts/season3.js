/* global episodes */

const season3 = {
  start_date: { year: 2015, month: 3, day: 21 },
  end_date: { year: 2016, month: 5, day: 11 },
  text: { headline: 'Season 3' },
};

let panPanText = '<small>Written by Gabriel Urbina</small> <br>';
panPanText += '<ul><i>';
panPanText += '  <li>The remaining crew scrapes by as the station deteriorates</li>';
panPanText += '  <li>Minkowski sends a distress call to Command</li>';
panPanText += '</i></ul>';

const panPan = {
  start_date: { year: 2015, month: 7, day: 15 },
  text: {
    headline: 'Pan-Pan',
    text: panPanText,
  },
};

let maydayText = '<small>Written by Gabriel Urbina</small> <br>';
maydayText += '<ul><i>';
maydayText += '  <li>Eiffel spends roughly 6 months lost in space</li>';
maydayText += '</i></ul>';

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
securiteText += '<ul><i>';
securiteText += '  <li>SI-5 agents Col. Kepler, Mr. Jacobi, and Dr. Maxwell arrive on the Hephaestus</li>';
securiteText += '  <li>Kepler takes command of the station</li>';
securiteText += '</i></ul>';

const securite = {
  start_date: { year: 2015, month: 10, day: 5, hour: 1 },
  text: {
    headline: 'Sécurité',
    text: securiteText,
  },
  display_date: 'October 5, 2015',
};

let demolitionText = '<small>Written by Gabriel Urbina</small> <br>';
demolitionText += '<ul><i>';
demolitionText += '  <li></li>';
demolitionText += '</i></ul>';

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
bearText += '<ul><i>';
bearText += '  <li></li>';
bearText += '</i></ul>';

const bear = {
  start_date: { year: 2015, month: 11, day: 30 },
  text: {
    headline: 'Don\'t Poke the Bear',
    text: bearText,
  },
};

let perspectiveText = '<small>Written by Gabriel Urbina</small> <br>';
perspectiveText += '<ul><i>';
perspectiveText += '  <li></li>';
perspectiveText += '</i></ul>';

const perspective = {
  start_date: { year: 2015, month: 12, day: 24 },
  end_date: { year: 2015, month: 12, day: 25 },
  text: {
    headline: 'A Matter of Perspective',
    text: perspectiveText,
  },
};

let needToKnowText = '<small>Written by Gabriel Urbina</small> <br>';
needToKnowText += '<ul><i>';
needToKnowText += '  <li></li>';
needToKnowText += '</i></ul>';

const needToKnow = {
  start_date: { year: 2016, month: 1, day: 6 },
  end_date: { year: 2016, month: 1, day: 7 },
  text: {
    headline: 'Need to Know',
    text: needToKnowText,
  },
};

let brimstoneText = '<small>Written by Emma Sherr-Ziarko</small> <br>';
brimstoneText += '<ul><i>';
brimstoneText += '  <li></li>';
brimstoneText += '</i></ul>';

const brimstone = {
  start_date: { year: 2016, month: 1, day: 21 },
  text: {
    headline: 'Fire and Brimstone',
    text: brimstoneText,
  },
  display_date: 'January 21, 2016*',
};

let overtureText = '<small>Written by Sarah Shachat</small> <br>';
overtureText += '<ul><i>';
overtureText += '  <li></li>';
overtureText += '</i></ul>';

const overture = {
  start_date: { year: 2016, month: 2, day: 8 },
  end_date: { year: 2016, month: 2, day: 10 },
  text: {
    headline: 'Overture',
    text: overtureText,
  },
};

let happyEndingsText = '<small>Written by Gabriel Urbina</small> <br>';
happyEndingsText += '<ul><i>';
happyEndingsText += '  <li></li>';
happyEndingsText += '</i></ul>';

const happyEndings = {
  start_date: { year: 2016, month: 2, day: 28 },
  end_date: { year: 2016, month: 3, day: 1 },
  text: {
    headline: 'Happy Endings',
    text: happyEndingsText,
  },
};

let consideredText = '<small>Written by Sarah Shachat</small> <br>';
consideredText += '<ul><i>';
consideredText += '  <li></li>';
consideredText += '</i></ul>';

const considered = {
  start_date: { year: 2016, month: 3, day: 12 },
  text: {
    headline: 'All Things Considered',
    text: consideredText,
  },
};

let limboText = '<small>Written by Sarah Shachat</small> <br>';
limboText += '<ul><i>';
limboText += '  <li></li>';
limboText += '</i></ul>';

const limbo = {
  start_date: { year: 2016, month: 3, day: 30 },
  text: {
    headline: 'Limbo',
    text: limboText,
  },
};

let memoriaText = '<small>Written by Gabriel Urbina</small> <br>';
memoriaText += '<ul><i>';
memoriaText += '  <li></li>';
memoriaText += '</i></ul>';

const memoria = {
  start_date: { year: 2016, month: 3, day: 30 },
  end_date: { year: 2016, month: 4, day: 1 },
  text: {
    headline: 'Memoria',
    text: memoriaText,
  },
};

let timeToKillText = '<small>Written by Sarah Shachat</small> <br>';
timeToKillText += '<ul><i>';
timeToKillText += '  <li></li>';
timeToKillText += '</i></ul>';

const timeToKill = {
  start_date: { year: 2016, month: 4, day: 26 },
  text: {
    headline: 'Time to Kill',
    text: timeToKillText,
  },
};

let persuasionText = '<small>Written by Zach Valenti</small> <br>';
persuasionText += '<ul><i>';
persuasionText += '  <li></li>';
persuasionText += '</i></ul>';

const persuasion = {
  start_date: { year: 2016, month: 5, day: 9 },
  text: {
    headline: 'Persuasion',
    text: persuasionText,
  },
};

let desperateTimesText = '<small>Written by Gabriel Urbina</small> <br>';
desperateTimesText += '<ul><i>';
desperateTimesText += '  <li></li>';
desperateTimesText += '</i></ul>';

const desperateTimes = {
  start_date: { year: 2016, month: 5, day: 10, hour: 1 },
  text: {
    headline: 'Desperate Times',
    text: desperateTimesText,
  },
  display_date: 'May 10, 2016',
};

let desperateMeasuresText = '<small>Written by Gabriel Urbina</small> <br>';
desperateMeasuresText += '<ul><i>';
desperateMeasuresText += '  <li></li>';
desperateMeasuresText += '</i></ul>';

const desperateMeasures = {
  start_date: { year: 2016, month: 5, day: 10, hour: 3 },
  text: {
    headline: 'Desperate Measures',
    text: desperateMeasuresText,
  },
  display_date: 'May 10, 2016',
};

let boleroText = '<small>Written by Gabriel Urbina</small> <br>';
boleroText += '<ul><i>';
boleroText += '  <li></li>';
boleroText += '</i></ul>';

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
