const A = {};

A.ease = {
  linear: function (progress) {
    return progress;
  },
  quad: function (progress) {
    return Math.pow(progress, 2);
  },
  easeOut: function (progress) {
    return Math.pow(--progress, 5) + 1;
  },
  circ: function (progress) {
    return 1 - Math.sin(Math.acos(progress))
  },
  easeOutElastic: function (progress) {
    return Math.pow(2, -10 * progress) * Math.sin((progress - .1) * 5 * Math.PI) + 1;
  }
};

A.animate = function (opts) {
  let duration = opts.duration || 1000,
    draw = opts.draw || function () {},
    ease = opts.ease || A.ease.linear,
    before = opts.before,
    after = opts.after,
    start = performance.now(),
    requestId;

  typeof before === 'function' && before();

  requestId = requestAnimationFrame(function tick(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = ease(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(tick);
    } else {
      typeof after === 'function' && after();
    }
  });

  return function() {
    requestId && cancelAnimationFrame(requestId);
  };
};

export default A;