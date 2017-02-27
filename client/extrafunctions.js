/* global $ */
console.log('loading extra functions');

// Hide unnecessary elements on title card
$('#wolf-359-marker').css('display', 'none');
$('#wolf-359').find('h3').css('display', 'none');

$('p').css('color', 'black');

// change background on slide change
$('.tl-slidenav-content-container, .tl-slidenav-content, .tl-timemarker')
  .click(() => {
    const bgNumber = Math.floor(Math.random() * 9) + 1;
    $('body').css('background-image', `url("./backgrounds/bg${bgNumber}.png")`);
  });
