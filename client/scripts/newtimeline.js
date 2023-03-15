/* global episodes, season1, season2, season3 */

const timelineInfo = {
  events: episodes,
  eras: [season1, season2, season3],
};

const timelineOptions = { scale_factor: 7, start_at_slide: 1 };

const timeline = new TL.Timeline(
  'timeline-embed',
  timelineInfo,
  timelineOptions
);
