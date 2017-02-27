/* global $ */

// Hide unnecessary elements on title card
$('#wolf-359-marker').css('display', 'none');
$('#wolf-359').find('h3').css('display', 'none');

$('p').css('color', 'black');

$('.tl-slidenav-icon').click(() => {
  const color = $('body').css('background-color') === 'red' ? 'black' : 'red';
  $('body').css('background-color', color);
});
