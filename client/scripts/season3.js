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
demolitionText += '  <li>Kepler conducts reviews of the Hephaestus crew</li>';
demolitionText += '  <li>The Plant Monster is killed</li>';
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
bearText += '  <li>Eiffel gets a checkup from Hilbert, under Kepler\'s supervision</li>';
bearText += '  <li>Lovelace, Maxwell, and Jacobi try to break into Kepler\'s private server</li>';
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
perspectiveText += '  <li>Eiffel intercepts an alien transmission</li>';
perspectiveText += '  <li>Minkowski, Lovelace, Hera, and Maxwell play Funzo</li>';
perspectiveText += '  <li>Eiffel turns 33</li>';
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
needToKnowText += '  <li>Minkowski, Lovelace, Maxwell, Jacobi, and Hera "accidentally" see some unflattering confidential information</li>';
needToKnowText += '  <li>Minkowski discovers that Eiffel was imprissoned for kidnapping and child endangerment</li>';
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
brimstoneText += '  <li>Maxwell is in a dangerous situation</li>';
brimstoneText += '  <li>Minkowski goes rogue</li>';
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
overtureText += '  <li>Jacobi attempts to launch a sensor probe, which causes problems for Hera\'s systems</li>';
overtureText += '  <li>The crew collects data that a significant contact event will occur in three months</li>';
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
happyEndingsText += '  <li>Hilbert and Lovelace enter the hidden door in engineering</li>';
happyEndingsText += '  <li>Hilbert and Lovelace decide to start producing napalm... just in case</li>';
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
consideredText += '  <li>Minkowski, Eiffel, and Jacobi present conflicting stories as to how Kepler\'s scotch ended up in space</li>';
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
limboText += '  <li>Hera suffers a systems crash</li>';
limboText += '  <li>Eiffel talks with Minkowski about his jail sentence</li>';
limboText += '</i></ul>';

const limbo = {
  start_date: { year: 2016, month: 3, day: 30, hour: 1 },
  text: {
    headline: 'Limbo',
    text: limboText,
  },
  display_date: 'March 30, 2016',
};

let memoriaText = '<small>Written by Gabriel Urbina</small> <br>';
memoriaText += '<ul><i>';
memoriaText += '  <li>Maxwell enters Hera\'s memory to repair her system damage</li>';
memoriaText += '  <li>Hera and Maxwell discover the source of Hera\'s persistent glitching</li>';
memoriaText += '</i></ul>';

const memoria = {
  start_date: { year: 2016, month: 3, day: 30, hour: 3 },
  end_date: { year: 2016, month: 4, day: 1 },
  text: {
    headline: 'Memoria',
    text: memoriaText,
  },
  display_date: 'March 30 2016 - April 1 2016',
};

let timeToKillText = '<small>Written by Sarah Shachat</small> <br>';
timeToKillText += '<ul><i>';
timeToKillText += '  <li>Lovelace, Eiffel, Maxwell, and Jacobi spend 96 hours in a hab to collect data on the star</li>';
timeToKillText += '  <li>They encounter an anomaly</li>';
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
persuasionText += '  <li>The crew tries to attach a psi wave regulator to the station during a solar storm</li>';
persuasionText += '  <li>Hilbert and Eiffel build a device that allows Minkowski to call Earth</li>';
persuasionText += '  <li>Minkowski discovers Goddard told the world the crew died in a suttle crash</li>';
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
desperateTimesText += '  <li>The crew lay out a plan to overthrow the SI-5 agents</li>';
desperateTimesText += '  <li>Eiffel and Lovelace are taken captive</li>'
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
desperateMeasuresText += '  <li>Kepler shoots Lovelace</li>';
desperateMeasuresText += '  <li>Jacobi blows up Hilbert</li>';
desperateMeasuresText += '  <li>Minkowski shoots Maxwell</li>';
desperateMeasuresText += '  <li>Kepler surrenders the station</li>';
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
boleroText += '  <li>Eiffel organizes a funeral</li>';
boleroText += '  <li>The contact event begins</li>';
boleroText += '  <li>Lovelace is revealed to be an alien</li>';
boleroText += '</i></ul>';

const bolero = {
  start_date: { year: 2016, month: 5, day: 11, hour: 1 },
  text: {
    headline: 'Boléro',
    text: boleroText,
  },
  display_date: 'May 11, 2016'
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
