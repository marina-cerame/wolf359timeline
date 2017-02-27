/* global $, document */

$(document).ready(() => {
  // ========== STYLING CHANGES ========== //
  // Hide unnecessary elements on title card
  $('#wolf-359-marker').css('display', 'none');
  $('#wolf-359').find('h3').css('display', 'none');

  // change background on slide change
  $('.tl-slidenav-content-container, .tl-slidenav-content, .tl-timemarker')
    .click(() => {
      const bgNumber = Math.floor(Math.random() * 9) + 1;
      $('body').css('background-image', `url("./backgrounds/bg${bgNumber}.jpg")`);
    });

  // ========== AUDIO CONTROLS ========== //
  // Play Initial Audio
  const $audio = $('audio')[0];
  $audio.play();
  $audio.volume = 0.7;

  // Play/Mute Audio Control
  let audioStatus = true;
  $('.audio-status, .tl-icon-music').click(() => {
    // toggle audio status
    audioStatus = !audioStatus;
    // change visible elements
    $('.audio-status').text(audioStatus ? 'Audio On' : 'Audio Off');
    $('.tl-icon-music').css('color', audioStatus ? 'rgba(225,225,225,0.8)' : 'rgba(0,0,0,0.5)');

    // stop or resume audio
    if (!audioStatus) {
      $audio.pause();
    } else {
      $audio.play();
    }
  });

  // play audio based on episode
  $('body').on('slide-change', () => {
    if (audioStatus) {
      $audio.pause();
      console.log($('.tl-timemarker-active').attr('id'));
      const title = $('.tl-timemarker-active').attr('id');
    }
  });

// ========== DISPLAY DATE/MISSION DAY ========== //
  let displayDate;
  let reset = true;

  $('body').on('slide-change', () => { reset = true; });

  const headlineHoverIn = (e) => {
    // console.log($(e.target).parents('.tl-slide').attr('id'));
    if (reset) {
      displayDate = $(e.target).text();
      reset = false;
    }
    $(e.target).fadeOut(250, () => {
      $(e.target).text('new text!');
    }).fadeIn(250);
  };

  const headlineHoverOut = (e) => {
    $(e.target).fadeOut(250, () => {
      $(e.target).text(displayDate);
    }).fadeIn(250);
  };

  $('.tl-headline-date')
    .hover(headlineHoverIn, headlineHoverOut);

// End document.ready
});

// ========== TRYING OUT FEATURES ========== //

// $('.tl-slide').append('')
