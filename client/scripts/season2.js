/* global episodes */

const season2 = {
  start_date: { year: 2014, month: 12, day: 26 },
  end_date: { year: 2015, month: 3, day: 21 },
  text: { headline: 'Season 2' },
};

let kumbayaText = '<small>Written by Gabriel Urbina</small> <br>';
kumbayaText += '<ul><i>';
kumbayaText +=
  '  <li>Minkowski and Eiffel lie to Mr. Cutter about the transmissions, request mission termination</li>';
kumbayaText += '  <li>Mr. Cutter does not terminate their mission</li>';
kumbayaText +=
  '  <li>Minkowski and Eiffel find a message from Captain Lovelace hidden on the aux system</li>';
kumbayaText += '</i></ul>';

const kumbaya = {
  start_date: { year: 2014, month: 12, day: 26 },
  text: {
    headline: 'The Kumbaya Approach',
    text: kumbayaText,
  },
};

let whatsUpText = '<small>Written by Gabriel Urbina</small> <br>';
whatsUpText += '<ul><i>';
whatsUpText += '  <li>Minkowski and Eiffel attempt to interrogate Hilbert</li>';
whatsUpText += "  <li>Hilbert hints at Eiffel's Dark Backstory™</li>";
whatsUpText += '</i></ul>';

const whatsUp = {
  start_date: { year: 2014, month: 12, day: 28 },
  text: {
    headline: "What's Up, Doc?",
    text: whatsUpText,
  },
};

let painfullyText = '<small>Written by Gabriel Urbina</small> <br>';
painfullyText += '<ul><i>';
painfullyText +=
  '  <li>Minkowski and Eiffel are barely keeping the Hephaestus working</li>';
painfullyText += "  <li>Hilbert repairs Hera's personality core</li>";
painfullyText += '</i></ul>';

const painfully = {
  start_date: { year: 2015, month: 1, day: 11 },
  text: {
    headline: 'Painfully Ever After',
    text: painfullyText,
  },
};

let bachText = '<small>Written by Gabriel Urbina</small> <br>';
bachText += '<ul><i>';
bachText +=
  '  <li>Eiffel goes 59 minutes and 29 seconds without making pop culture references</li>';
bachText += '  <li>Hilbert locates the source of the space transmissions</li>';
bachText += '  <li>Minkowski is married – this is not a typo</li>';
bachText += '</i></ul>';

const bach = {
  start_date: { year: 2015, month: 1, day: 21 },
  text: {
    headline: 'Bach to the Future',
    text: bachText,
  },
};

let assistanceText = '<small>Written by Gabriel Urbina</small> <br>';
assistanceText += '<ul><i>';
assistanceText += '  <li>Hera accidentally almost kills everyone</li>';
assistanceText +=
  '  <li>Eiffel and Minkowski discover more about Captain Lovelace and the previous Hephaestus mission</li>';
assistanceText += '  <li>Dr. Selberg is revealed to be Hilbert</li>';
assistanceText += '</i></ul>';

const assistance = {
  start_date: { year: 2015, month: 2, day: 2 },
  text: {
    headline: 'Happy to Be of Assistance',
    text: assistanceText,
  },
};

let killHilbertText = '<small>Written by Sarah Shachat</small> <br>';
killHilbertText += '<ul><i>';
killHilbertText +=
  '  <li>Minkowski, Eiffel, and Hera weigh the pros and cons of killing Hilbert</li>';
killHilbertText +=
  '  <li>Hera tries to kill Hilbert, accidentally almost kills Eiffel</li>';
killHilbertText += '</i></ul>';

const killHilbert = {
  start_date: { year: 2015, month: 2, day: 2 },
  text: {
    headline: "Let's Kill Hilbert",
    text: killHilbertText,
  },
};

let paranoiaText = '<small>Written by Gabriel Urbina</small> <br>';
paranoiaText += '<ul><i>';
paranoiaText += '  <li>The Disappearing Screwdriver Mystery</li>';
paranoiaText +=
  "  <li>Hilbert and Eiffel make repairs to Hera's systems – Nakedness ensues</li>";
paranoiaText += '  <li>The Plant Monster steals a screwdriver</li>';
paranoiaText += '</i></ul>';

const paranoia = {
  start_date: { year: 2015, month: 2, day: 8 },
  text: {
    headline: 'The Paranoia Game',
    text: paranoiaText,
  },
};

let commandingText = '<small>Written by Sarah Shachat</small> <br>';
commandingText += '<ul><i>';
commandingText += '  <li>Minkowski hunts the Plant Monster</li>';
commandingText +=
  '  <li>Captain Lovelace makes contact with the Hephaestus</li>';
commandingText += '</i></ul>';

const commanding = {
  start_date: { year: 2015, month: 2, day: 14 },
  end_date: { year: 2015, month: 2, day: 28 },
  text: {
    headline: 'Minkowski Commanding',
    text: commandingText,
  },
};

let destructionText = '<small>Written by Gabriel Urbina</small> <br>';
destructionText += '<ul><i>';
destructionText += '  <li>Lovelace arrives on the Hephaestus</li>';
destructionText +=
  "  <li>Minkowski discovers a bomb on Lovelace's shuttle</li>";
destructionText +=
  '  <li>Lovelace commandeers the crew to repair her shuttle</li>';
destructionText += '</i></ul>';

const destruction = {
  start_date: { year: 2015, month: 2, day: 28 },
  text: {
    headline: 'Mutually Assured Destruction',
    text: destructionText,
  },
};

let noPressureText = '<small>Written by Sarah Shachat</small> <br>';
noPressureText += '<ul><i>';
noPressureText +=
  "  <li>Lovelace, Minkowski, and Eiffel work on the shuttle's life support</li>";
noPressureText +=
  "  <li>Minkowski, Eiffel, and Hera hatch a plan to get rid of Lovelace's bomb</li>";
noPressureText += '</i></ul>';

const noPressure = {
  start_date: { year: 2015, month: 3, day: 10 },
  text: {
    headline: 'No Pressure',
    text: noPressureText,
  },
};

let brainDamageText = '<small>Written by Gabriel Urbina</small> <br>';
brainDamageText += '<ul><i>';
brainDamageText += "  <li>Minkowski and Hera adjust Hera's systems</li>";
brainDamageText +=
  '  <li>Eiffel and Lovelace continue work on the shuttle</li>';
brainDamageText += '  <li>Minkowski recruits Hilbert against Lovelace</li>';
brainDamageText += '</i></ul>';

const brainDamage = {
  start_date: { year: 2015, month: 3, day: 12 },
  text: {
    headline: 'Tactical Brain Damage',
    text: brainDamageText,
  },
};

let superheroText = '<small>Written by Sarah Shachat</small> <br>';
superheroText += '<ul><i>';
superheroText +=
  "  <li>Hilbert and Eiffel work on manipulating Hera's sensors</li>";
superheroText += '  <li>Lovelace and Minkowski fix the shuttle</li>';
superheroText += '  <li>Eiffel suffers a Decima outbreak</li>';
superheroText += '</i></ul>';

const superhero = {
  start_date: { year: 2015, month: 3, day: 14, hour: 1 },
  text: {
    headline: 'Lame-o Superhero Origin Story',
    text: superheroText,
  },
  display_date: 'March 14, 2015',
};

let noHarmText = '<small>Written by Zach Valenti</small> <br>';
noHarmText += '<ul><i>';
noHarmText += "  <li>Hilbert and Minkowski work to save Eiffel's life</li>";
noHarmText += '  <li>Lovelace gives Eiffel a blood transfusion</li>';
noHarmText += '  <li>Wolf 359 turns blue</li>';
noHarmText += '</i></ul>';

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
knockKnockText += '<ul><i>';
knockKnockText +=
  '  <li>Wolf 359 turns blue and increases in size, causing problems for the Hephaestus</li>';
knockKnockText +=
  '  <li>Eiffel, Hilbert, and Minkowski experience some potentailly radiation-induced paranoia</li>';
knockKnockText += '  <li>The crew receive a transmission</li>';
knockKnockText += '</i></ul>';

const knockKnock = {
  start_date: { year: 2015, month: 3, day: 21, hour: 16 },
  text: {
    headline: 'Knock Knock',
    text: knockKnockText,
  },
  display_date: 'March 21, 2015',
};

let whosThereText = '<small>Written by Gabriel Urbina</small> <br>';
whosThereText += '<ul><i>';
whosThereText +=
  "  <li>Aliens communicate with the crew using clips from Eiffel's logs</li>";
whosThereText += '  <li>Lovelace is injured</li>';
whosThereText +=
  "  <li>Eiffel uses Lovelace's shuttle to help the Hephaestus escape the star's gravity</li>";
whosThereText +=
  '  <li>The bomb goes off, sending the shuttle and Eiffel into deep space</li>';
whosThereText += '</i></ul>';

const whosThere = {
  start_date: { year: 2015, month: 3, day: 21, hour: 17 },
  text: {
    headline: "Who's There?",
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
