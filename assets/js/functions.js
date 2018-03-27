// skills svg animation

var params = {
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: assets/js/data.json
};

var anim;

anim = lottie.loadAnimation(params);
