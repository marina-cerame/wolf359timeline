/* global episodes */

const season2 = {
  start_date: { year: 2014, month: 12, day: 26 },
  end_date: { year: 2015, month: 3, day: 21 },
  text: { headline: 'Season 2' },
};

let kumbayaText = '<small>Written by Gabriel Urbina</small> <br>';
kumbayaText += '';

const kumbaya = {
  start_date: { year: 2014, month: 12, day: 26 },
  text: {
    headline: 'The Kumbaya Approach',
    text: kumbayaText,
  },
};

let whatsUpText = '<small>Written by Gabriel Urbina</small> <br>';
whatsUpText += '';

const whatsUp = {
  start_date: { year: 2014, month: 12, day: 28 },
  text: {
    headline: 'What\'s Up, Doc?',
    text: whatsUpText,
  },
};

let painfullyText = '<small>Written by Gabriel Urbina</small> <br>';
painfullyText += '';

const painfully = {
  start_date: { year: 2015, month: 1, day: 11 },
  text: {
    headline: 'Painfully Ever After',
    text: painfullyText,
  },
};

let bachText = '<small>Written by Gabriel Urbina</small> <br>';
bachText += '';

const bach = {
  start_date: { year: 2015, month: 1, day: 21 },
  text: {
    headline: 'Bach to the Future',
    text: bachText,
  },
};

let assistanceText = '<small>Written by Gabriel Urbina</small> <br>';
assistanceText += '';

const assistance = {
  start_date: { year: 2015, month: 2, day: 2 },
  text: {
    headline: 'Happy to Be of Assistance',
    text: assistanceText,
  },
};

let killHilbertText = '<small>Written by Sarah Shachat</small> <br>';
killHilbertText += '';

const killHilbert = {
  start_date: { year: 2015, month: 2, day: 2 },
  text: {
    headline: 'Let\'s Kill Hilbert',
    text: killHilbertText,
  },
};

let paranoiaText = '<small>Written by Gabriel Urbina</small> <br>';
paranoiaText += '';

const paranoia = {
  start_date: { year: 2015, month: 2, day: 8 },
  text: {
    headline: 'The Paranoia Game',
    text: paranoiaText,
  },
};

let commandingText = '<small>Written by Sarah Shachat</small> <br>';
commandingText += '';

const commanding = {
  start_date: { year: 2015, month: 2, day: 14 },
  end_date: { year: 2015, month: 2, day: 28 },
  text: {
    headline: 'Minkowski Commanding',
    text: commandingText,
  },
};

let destructionText = '<small>Written by Gabriel Urbina</small> <br>';
destructionText += '';

const destruction = {
  start_date: { year: 2015, month: 2, day: 28 },
  text: {
    headline: 'Mutually Assured Destruction',
    text: destructionText,
  },
};

let noPressureText = '<small>Written by Sarah Shachat</small> <br>';
noPressureText += '';

const noPressure = {
  start_date: { year: 2015, month: 3, day: 10 },
  text: {
    headline: 'No Pressure',
    text: noPressureText,
  },
};

let brainDamageText = '<small>Written by Gabriel Urbina</small> <br>';
brainDamageText += '';

const brainDamage = {
  start_date: { year: 2015, month: 3, day: 12 },
  text: {
    headline: 'Tactical Brain Damage',
    text: brainDamageText,
  },
};

let superheroText = '<small>Written by Sarah Shachat</small> <br>';
superheroText += '';

const superhero = {
  start_date: { year: 2015, month: 3, day: 14, hour: 1 },
  text: {
    headline: 'Lame-o Superhero Origin Story',
    text: superheroText,
  },
  display_date: 'March 14, 2015',
};

let noHarmText = '<small>Written by Zach Valenti</small> <br>';
noHarmText += '';

const noHarm = {
  start_date: { year: 2015, month: 3, day: 14, hour: 4 },
  end_date: { year: 2015, month: 3, day: 21 },
  text: {
    headline: 'Do No Harm',
    text: noHarmText,
  },
  display_date: 'March 14, 2015 – March 21, 2015',
};

let knockKnockText = '<small>Written by Gabriel Urbina</small> <br>';
knockKnockText += '';

const knockKnock = {
  start_date: { year: 2015, month: 3, day: 21, hour: 16 },
  text: {
    headline: 'Knock Knock',
    text: knockKnockText,
  },
  display_date: 'March 21, 2015',
};

let whosThereText = '<small>Written by Gabriel Urbina</small> <br>';
whosThereText += '';

const whosThere = {
  start_date: { year: 2015, month: 3, day: 21, hour: 17 },
  text: {
    headline: 'Who\'s There?',
    text: whosThereText,
  },
  display_date: 'March 21, 2015',
};

episodes = episodes.concat([
  kumbaya,
  whatsUp,
  painfully,
  bach,
  assistance,
  killHilbert,
  paranoia,
  commanding,
  destruction,
  noPressure,
  brainDamage,
  superhero,
  noHarm,
  knockKnock,
  whosThere,
]);
