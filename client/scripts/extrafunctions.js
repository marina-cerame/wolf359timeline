/* global $, document */

$(document).ready(() => {
  // ========== STYLING CHANGES ========== //
  // Check for mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  // Hide unnecessary elements on title card
  $('#wolf-359-marker').css('display', 'none');
  $('#wolf-359').find('h3').css('display', 'none');

  // change background on slide change
  $('.tl-slidenav-content-container, .tl-slidenav-content, .tl-timemarker')
    .click(() => {
      if (!isMobile) {
        const bgNumber = Math.floor(Math.random() * 9) + 1;
        $('body').css('background-image', `url("./backgrounds/bg${bgNumber}.jpg")`);
      }
    });

  // if (isMobile) {
  //   $('.audio').css('display', 'none');
  // }

  // ========== AUDIO CONTROLS ========== //
  // Play Initial Audio
  let audioStatus = true;
  const $audio = $('audio')[0];
  if (audioStatus) {
    $audio.play();
    $audio.volume = 0.8;
  }

  // Play/Mute Audio Control
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

  // audio link helper object
  const audioLinks = {
    'wolf-359-marker': 'http://feeds.soundcloud.com/stream/314106624-rinasaurus-rex-timeline-snippet-main-title.mp3',
    'succulent-rat-killing-tar-marker': 'http://feeds.soundcloud.com/stream/314106152-rinasaurus-rex-timeline-snippet-rat-killing-tar.mp3',
    'little-revolucion-marker': 'http://feeds.soundcloud.com/stream/314108343-rinasaurus-rex-timeline-snippet-little-revolucion.mp3',
    'discomforts-pains-and-irregularities-marker': 'http://feeds.soundcloud.com/stream/314110050-rinasaurus-rex-timeline-snippet-discomforts-pains-and-irregularities.mp3',
    'cataracts-and-hurricanoes-marker': 'http://feeds.soundcloud.com/stream/314112057-rinasaurus-rex-timeline-snippet-cataracts-and-hurricanoes.mp3',
    'cigarette-candy-marker': 'http://feeds.soundcloud.com/stream/314114894-rinasaurus-rex-timeline-snippet-cigarette-candy.mp3',
    'super-energy-saver-mode-marker': 'http://feeds.soundcloud.com/stream/314119814-rinasaurus-rex-timeline-snippet-super-energy-saver-mode.mp3',
    'the-sound-and-the-fury-marker': 'http://feeds.soundcloud.com/stream/314121645-rinasaurus-rex-timeline-snippet-the-sound-and-the-fury.mp3',
    'are-space-suits-itchy-marker': 'http://feeds.soundcloud.com/stream/314120826-rinasaurus-rex-timeline-snippet-are-space-suits-itchy.mp3',
    'box-953-marker': 'http://feeds.soundcloud.com/stream/314125898-rinasaurus-rex-timeline-snippet-box-953.mp3',
    'the-empty-man-cometh-marker': 'http://feeds.soundcloud.com/stream/314126585-rinasaurus-rex-timeline-snippet-the-empty-man-cometh.mp3',
    'extreme-danger-bug-marker': 'http://feeds.soundcloud.com/stream/314127391-rinasaurus-rex-timeline-snippet-extreme-danger-bug.mp3',
    'am-i-alone-now-marker': 'http://feeds.soundcloud.com/stream/314129276-rinasaurus-rex-timeline-snippet-am-i-alone-now.mp3',
    'deep-breaths-marker': 'http://feeds.soundcloud.com/stream/314128745-rinasaurus-rex-timeline-snippet-deep-breaths.mp3',
    'gas-me-twice-marker': 'http://feeds.soundcloud.com/stream/314130181-rinasaurus-rex-timeline-snippet-gas-me-twice.mp3',
    'the-kumbaya-approach-marker': 'http://feeds.soundcloud.com/stream/314154828-rinasaurus-rex-timeline-snippet-kumbaya-approach.mp3',
    'whats-up-doc-marker': 'http://feeds.soundcloud.com/stream/314157948-rinasaurus-rex-timeline-snippet-whats-up-doc.mp3',
    'painfully-ever-after-marker': 'http://feeds.soundcloud.com/stream/314158634-rinasaurus-rex-timeline-snippet-painfully-ever-after.mp3',
    'bach-to-the-future-marker': 'http://feeds.soundcloud.com/stream/314162985-rinasaurus-rex-timeline-snippet-bach-to-the-future.mp3',
    'happy-to-be-of-assistance-marker': 'http://feeds.soundcloud.com/stream/314165528-rinasaurus-rex-timeline-snippet-happy-to-be-of-assistance.mp3',
    'lets-kill-hilbert-marker': 'http://feeds.soundcloud.com/stream/314166634-rinasaurus-rex-timeline-snippet-lets-kill-hilbert.mp3',
    'the-paranoia-game-marker': 'http://feeds.soundcloud.com/stream/314179624-rinasaurus-rex-timeline-snippet-paranoia-game.mp3',
    'minkowski-commanding-marker': 'http://feeds.soundcloud.com/stream/314181043-rinasaurus-rex-timeline-snippet-minkowski-commanding.mp3',
    'mutually-assured-destruction-marker': 'http://feeds.soundcloud.com/stream/314182659-rinasaurus-rex-timeline-snippet-mutually-assured-destruction.mp3',
    'no-pressure-marker': 'http://feeds.soundcloud.com/stream/314183600-rinasaurus-rex-timeline-snippet-no-pressure.mp3',
    'tactical-brain-damage-marker': 'http://feeds.soundcloud.com/stream/314188090-rinasaurus-rex-timeline-snippet-tactical-brain-damage.mp3',
    'variations-on-a-theme-marker': 'http://feeds.soundcloud.com/stream/314188997-rinasaurus-rex-timeline-snippet-variations-on-a-theme.mp3',
    'lame-o-superhero-origin-story-marker': 'http://feeds.soundcloud.com/stream/314189880-rinasaurus-rex-timeline-snippet-lame-o-superhero-origin-story.mp3',
    'do-no-harm-marker': 'http://feeds.soundcloud.com/stream/314272523-rinasaurus-rex-timeline-snippet-do-no-harm.mp3',
    'deep-space-survival-procedure-and-protocol-marker': 'http://feeds.soundcloud.com/stream/314274164-rinasaurus-rex-timeline-snippet-wolf-359-live.mp3',
    'knock-knock-marker': 'http://feeds.soundcloud.com/stream/314275667-rinasaurus-rex-timeline-snippet-knock-knock.mp3',
    'whos-there-marker': 'http://feeds.soundcloud.com/stream/314279533-rinasaurus-rex-timeline-snippet-whos-there.mp3',
    'day-one-marker': 'http://feeds.soundcloud.com/stream/314281915-rinasaurus-rex-timeline-snippet-day-one.mp3',
    'mayday-marker': 'http://feeds.soundcloud.com/stream/314286139-rinasaurus-rex-timeline-snippet-mayday.mp3',
    'pan-pan-marker': 'http://feeds.soundcloud.com/stream/314285131-rinasaurus-rex-timeline-snippet-pan-pan.mp3',
    'securite-marker': 'http://feeds.soundcloud.com/stream/314287726-rinasaurus-rex-timeline-snippet-securite.mp3',
    'meanwhile-marker': 'http://feeds.soundcloud.com/stream/314288806-rinasaurus-rex-timeline-snippet-meanwhile.mp3',
    'controlled-demolition-marker': 'http://feeds.soundcloud.com/stream/314291026-rinasaurus-rex-timeline-snippet-controlled-demolition.mp3',
    'dont-poke-the-bear-marker': 'http://feeds.soundcloud.com/stream/314298193-rinasaurus-rex-timeline-snippet-dont-poke-the-bear.mp3',
    'a-matter-of-perspective-marker': 'http://feeds.soundcloud.com/stream/314299106-rinasaurus-rex-timeline-snippet-matter-of-perspective.mp3',
    'need-to-know-marker': 'http://feeds.soundcloud.com/stream/314302653-rinasaurus-rex-timeline-snippet-need-to-know.mp3',
    'fire-and-brimstone-marker': 'http://feeds.soundcloud.com/stream/314304303-rinasaurus-rex-timeline-snippet-fire-and-brimstone.mp',
    'overture-marker': 'http://feeds.soundcloud.com/stream/314305426-rinasaurus-rex-timeline-snippet-overture.mp3',
    'happy-endings-marker': 'http://feeds.soundcloud.com/stream/314306491-rinasaurus-rex-timeline-snippet-happy-endings.mp3',
    'all-things-considered-marker': 'http://feeds.soundcloud.com/stream/314307424-rinasaurus-rex-timeline-snippet-all-things-considered.mp3',
    'memoria-marker': 'http://feeds.soundcloud.com/stream/314314823-rinasaurus-rex-timeline-snippet-memoria.mp3',
    'limbo-marker': 'http://feeds.soundcloud.com/stream/314314068-rinasaurus-rex-timeline-snippet-limbo.mp3',
    'time-to-kill-marker': 'http://feeds.soundcloud.com/stream/314315622-rinasaurus-rex-timeline-snippet-time-to-kill.mp3',
    'persuasion-marker': 'http://feeds.soundcloud.com/stream/314317310-rinasaurus-rex-timeline-snippet-persuasion.mp3',
    'desperate-times-marker': 'http://feeds.soundcloud.com/stream/314317986-rinasaurus-rex-timeline-snippet-desperate-times.mp3',
    'desperate-measures-marker': 'http://feeds.soundcloud.com/stream/314345272-rinasaurus-rex-timeline-snippet-desperate-measures.mp3',
    'bolero-marker': 'http://feeds.soundcloud.com/stream/314345759-rinasaurus-rex-timeline-snippet-bolero.mp3',
  };

  // play audio based on episode
  $('body').on('slide-change', () => {
    const title = $('.tl-timemarker-active').attr('id');
    // console.log(title);
    $audio.src = audioLinks[title];
    if (audioStatus) {
      $audio.play();
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

    // season 2
    'the-kumbaya-approach': `${hephMission} 581`,
    'whats-up-doc': `${hephMission} 583`,
    'painfully-ever-after': `${hephMission} 597`,
    'bach-to-the-future': `${hephMission} 607`,
    'happy-to-be-of-assistance': `${hephMission} 619`,
    'lets-kill-hilbert': `${hephMission} 619`,
    'the-paranoia-game': `${hephMission} 625`,
    'minkowski-commanding': `${hephMission} 631 to 645`,
    'mutually-assured-destruction': `${hephMission} 645`,
    'no-pressure': `${hephMission} 655`,
    'tactical-brain-damage': `${hephMission} 657`,
    'lame-o-superhero-origin-story': `${hephMission} 659`,
    'do-no-harm': `${hephMission} 659 to 666`,
    'knock-knock': `${hephMission} 666`,
    'whos-there': `${hephMission} 666`,

    // season 3
    mayday: `${hephMission} 666 to 859`,
    'pan-pan': `${hephMission} 782`,
    securite: `${hephMission} 864`,
    'controlled-demolition': '* 239 Days Since Lovelace\'s Arrival',
    'dont-poke-the-bear': `${hephMission} 920`,
    'a-matter-of-perspective': `${hephMission} 944 to 945`,
    'need-to-know': `${hephMission} 959 to 960`,
    'fire-and-brimstone': '* No Mission Day Given',
    overture: `${hephMission} 990 to 992`,
    'happy-endings': `${hephMission} 1010 to 1012`,
    'all-things-considered': `${hephMission} 1023`,
    limbo: `${hephMission} 1041`,
    memoria: `${hephMission} 1041 to 1043`,
    'time-to-kill': `${hephMission} 1068`,
    persuasion: `${hephMission} 1081`,
    'desperate-times': `${hephMission} 1082`,
    'desperate-measures': `${hephMission} 1082`,
    bolero: `${hephMission} 1083`,

    // season 4
    'into-the-depths': `${hephMission} 1083`,
    // mini episodes
    'day-one': `${hephMission} 1`,
    'deep-space-survival-procedure-and-protocol': `${hephMission} 663`,
    'are-space-suits-itchy': '* No Mission Day Given',
    meanwhile: '* No Mission Day Given',
    'variations-on-a-theme': '* No Mission Day Given',

    // mission mishaps
  };

  $('body').on('slide-change', () => { shouldSave = true; });

  const headlineHoverIn = (e) => {
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
