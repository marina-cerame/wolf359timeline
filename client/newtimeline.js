/* global episodes, season1, season2, season3, $ */

const timelineObject = {
  events: episodes,
  eras: [
    season1,
    season2,
    season3,
  ],
};

const timeline = new TL.Timeline('timeline-embed', timelineObject, { scale_factor: 5 });

$('#wolf-359-marker').css('display', 'none');
$('#wolf-359').find('h3').css('display', 'none');
