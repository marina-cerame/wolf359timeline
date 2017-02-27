/* global $ */
console.log('loading extra functions');

// Hide unnecessary elements on title card
$('#wolf-359-marker').css('display', 'none');
$('#wolf-359').find('h3').css('display', 'none');

// change background on slide change
$('.tl-slidenav-content-container, .tl-slidenav-content, .tl-timemarker')
  .click(() => {
    const bgNumber = Math.floor(Math.random() * 9) + 1;
    $('body').css('background-image', `url("./backgrounds/bg${bgNumber}.png")`);
  });

// toggle audio
let audioStatus = true;
$('.audio-status, .tl-icon-music').click(() => {
  audioStatus = !audioStatus;
  $('.audio-status').text(audioStatus ? 'Audio On' : 'Audio Off');
  $('.tl-icon-music').css('color', audioStatus ? 'rgba(225,225,225,0.8)' : 'rgba(0,0,0,0.5)');
});
