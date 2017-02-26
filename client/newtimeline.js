/* global episodes, season1, season2 $ */

const season3 = {
  start_date: { year: 2015, month: 3, day: 21 },
  end_date: { year: 2016, month: 5, day: 11 },
  text: { headline: 'Season 3' },
};

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
