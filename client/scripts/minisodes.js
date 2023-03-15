/* global episodes */

// const lovelaceEra = {
//   start_date: { year: 2015, month: 3, day: 21 },
//   end_date: { year: 2016, month: 5, day: 11 },
//   text: { headline: 'Lovelace\'s Mission' },
// };

// Are Space Suits Itchy?
let spaceSuitsText =
  '<small>Written by Gabriel Urbina and Zach Valenti</small> <br>';
spaceSuitsText += 'Mini Episode 1 <br>';
spaceSuitsText += '<ul><i>';
spaceSuitsText +=
  '  <li>Eiffel is a goodwill ambassador to the American public school system</li>';
spaceSuitsText += '  <li>Eiffel admits to liking pineapple on pizza</li>';
spaceSuitsText += '</i></ul>';

const spaceSuits = {
  start_date: { year: 2014, month: 10, day: 24 },
  text: {
    headline: 'Are Space Suits Itchy?',
    text: spaceSuitsText,
  },
  display_date: 'October 24, 2014*',
};

// Day One
let dayOneText = '<small>Written by Gabriel Urbina</small> <br>';
dayOneText += 'Mini Episode 2';
dayOneText += '<ul><i>';
dayOneText += "  <li>The Hephaestus crew's first day on the station</li>";
dayOneText += '</i></ul>';

const dayOne = {
  start_date: { year: 2013, month: 5, day: 24 },
  text: {
    headline: 'Day One',
    text: dayOneText,
  },
};

// Variations on a Theme
let variationsText = '<small>Written by Gabriel Urbina</small> <br>';
variationsText += 'Mini Episode 3';
variationsText += '<ul><i>';
variationsText +=
  '  <li>Captain Lovelace reflects on her time on the Hephaestus</li>';
variationsText += '</i></ul>';

const variations = {
  start_date: { year: 2015, month: 3, day: 13 },
  text: {
    headline: 'Variations on a Theme',
    text: variationsText,
  },
  display_date: 'March 13, 2015*',
};

// Meanwhile
let meanwhileText = '<small>Written by Gabriel Urbina</small> <br>';
meanwhileText += 'Mini Episode 4';

const meanwhile = {
  start_date: { year: 2015, month: 10, day: 5, hour: 5 },
  text: {
    headline: 'Meanwhile',
    text: meanwhileText,
  },
  display_date: 'October 5, 2015*',
};

// Long Story Short
let longStoryText = '<small>Written by Sarah Shachat</small> <br>';
longStoryText += 'Mini Episode 5';

const longStory = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Long Story Short',
    text: longStoryText,
  },
};

// Once in a Lifetime
let lifetimeText = '<small>Written by Zach Valenti</small> <br>';
lifetimeText += 'Mini Episode 6';

const lifetime = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Once in a Lifetime',
    text: lifetimeText,
  },
};

// Rebranding
let rebrandingText = '<small>Written by Zach Valenti</small> <br>';
rebrandingText += 'Mini Episode 7';

const rebranding = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Rebranding',
    text: rebrandingText,
  },
};

// Language Mapping
let languageMappingText = '<small>Written by Zach Valenti</small> <br>';
languageMappingText += 'Mini Episode 8';

const languageMapping = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Language Mapping',
    text: languageMappingText,
  },
};

// Greensboro
let greensboroText = '<small>Written by Zach Valenti</small> <br>';
greensboroText += 'Mini Episode 9';

const greensboro = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Greensboro',
    text: greensboroText,
  },
};

// Things That Break Other Things
let breakOtherThingsText = '<small>Written by Zach Valenti</small> <br>';
breakOtherThingsText += 'Mini Episode 10';

const breakOtherThings = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Things that Break Other Things',
    text: breakOtherThingsText,
  },
};

// Decommissioned
let decommissionedText = '<small>Written by Zach Valenti</small> <br>';
decommissionedText += 'Mini Episode 11';

const decommissioned = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Decommissioned',
    text: decommissionedText,
  },
};

// Pagliacci
let pagliacciText = '<small>Written by Zach Valenti</small> <br>';
pagliacciText += 'Mini Episode 12';

const pagliacci = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Pagliacci',
    text: pagliacciText,
  },
};

// Kansas
let kansasText = '<small>Written by Zach Valenti</small> <br>';
kansasText += 'Mini Episode 13';

const kansas = {
  start_date: { year: 2015, month: 10, day: 5 },
  text: {
    headline: 'Kansas',
    text: kansasText,
  },
};

// Live Show
let liveShowText =
  '<small>Written by Gabriel Urbina and Sarah Shachat</small> <br>';
liveShowText += 'Live Show';
liveShowText += '<ul><i>';
liveShowText += '  <li>Eiffel investigates a mysterious beeping noise</li>';
liveShowText += "  <li>Lovelace's shuttle develops a new problem</li>";
liveShowText +=
  '  <li>Minkowski and Eiffel do some role-playing exercises</li>';
liveShowText += '  <li>The crew gets a call from Mr. Cutter</li>';
liveShowText += '</i></ul>';

const liveShow = {
  start_date: { year: 2015, month: 3, day: 18 },
  text: {
    headline: 'Deep Space Survival Procedure and Protocol',
    text: liveShowText,
  },
};

// Into the Depths
let changeOfMindText = '<small>Written by Gabriel Urbina</small> <br>';
changeOfMindText += '<ul><i>';
changeOfMindText += '  <li>Eiffel intercepts a radio signal in deep space</li>';
changeOfMindText += "  <li>Hilbert doesn't burn to death</li>";
changeOfMindText += '</i></ul>';

const changeOfMind = {
  start_date: { year: 2014, month: 8, day: 15 },
  text: {
    headline: 'Succulent Rat-Killing Tar',
    text: changeOfMindText,
  },
};

// One of Them
let oneOfThemText = '<small>Written by Gabriel Urbina</small> <br>';
oneOfThemText += '<ul><i>';
oneOfThemText += '  <li>Eiffel intercepts a radio signal in deep space</li>';
oneOfThemText += "  <li>Hilbert doesn't burn to death</li>";
oneOfThemText += '</i></ul>';

const oneOfThem = {
  start_date: { year: 2014, month: 8, day: 15 },
  text: {
    headline: 'Succulent Rat-Killing Tar',
    text: oneOfThemText,
  },
};

episodes = episodes.concat([
  spaceSuits,
  dayOne,
  // variations,
  meanwhile,
  // longStory,
  // lifetime,
  // rebranding,
  // languageMapping,
  // greensboro,
  // breakOtherThings,
  // decommissioned,
  // pagliacci,
  // kansas,
  liveShow,
  // changeOfMind,
  // oneOfThem
]);
