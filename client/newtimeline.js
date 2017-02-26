const season2 = {
  start_date: { year: 2014, month: 12, day: 26 },
  end_date: { year: 2015, month: 3, day: 21 },
  text: { headline: 'Season 2' },
};

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

const timeline = new TL.Timeline('timeline-embed', timelineObject, {scale_factor: 10});

$('#wolf-359-marker').css('display', 'none');
$('#wolf-359').find('h3').css('display', 'none');
