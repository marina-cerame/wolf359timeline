/* global $ */
console.log('loading extra functions');

// Hide unnecessary elements on title card
$('#wolf-359-marker').css('display', 'none');
$('#wolf-359').find('h3').css('display', 'none');

$('p').css('color', 'black');

// change background on slide change
$('.tl-slidenav-icon').click(() => {
  const currImage = $('body').css('background-image');
  const currNumber = Number(currImage[currImage.length - 7]);
  let bgNumber = Math.floor(Math.random() * 9) + 1;
  while (currNumber === bgNumber) {
    bgNumber = Math.floor(Math.random() * 9) + 1;
  }
  $('body').css('background-image', `url("./backgrounds/bg${bgNumber}.png")`);
});
