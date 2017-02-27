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
  $audio.volume = 0.8;

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
      const title = $('.tl-timemarker-active').attr('id');
      // console.log(title);
    }
  });

// ========== DISPLAY DATE/MISSION DAY ========== //
// necessary variables and helpers
  let displayDate;
  let shouldSave = true;

  const hephMission = 'Hephaestus Mission Day';
  const missionDays = {
    'succulent-rat-killing-tar': `${hephMission} 448`,
    'little-revolucion': `${hephMission} 455`,
    'discomforts-pains-and-irregularities': `${hephMission} 482`,
    'cataracts-and-hurricanoes': '* No Mission Day Given',
    'cigarette-candy': `${hephMission} 490 to 494`,
    'super-energy-saver-mode': `${hephMission} 500 to 501`,
    'the-sound-and-the-fury': `${hephMission} 512`,
    'box-953': `${hephMission} 525`,
    'the-empty-man-cometh': `${hephMission} 530`,
    'extreme-danger-bug': '* No Mission Day Given',
    'am-i-alone-now': '* No Mission Day Given',
    'deep-breaths': `${hephMission} 580`,
    'gas-me-twice': `${hephMission} 580`,
  };

  $('body').on('slide-change', () => { shouldSave = true; });

  const headlineHoverIn = (e) => {
    console.log($(e.target).parents('.tl-slide').attr('id'));
    // get episode
    const title = $(e.target).parents('.tl-slide').attr('id');

    // only save the target text if this is the first time
    if (shouldSave) {
      displayDate = $(e.target).text();
      shouldSave = false;
    }

    // switch to mission day
    $(e.target)
      .stop()
      .fadeOut(250, () => {
        $(e.target).text(missionDays[title]);
      })
      .fadeIn(250);
  };

  const headlineHoverOut = (e) => {
    $(e.target)
    .stop()
    .fadeOut(250, () => {
      $(e.target).text(displayDate);
    })
    .fadeIn(250);
  };

  $('.tl-headline-date')
    .hover(headlineHoverIn, headlineHoverOut);

// End document.ready
});

// ========== TRYING OUT FEATURES ========== //
