import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';
let isTime = localStorage.getItem(KEY);

player.on('timeupdate', throttle(function (event) {
  localStorage.setItem(KEY, JSON.stringify(event));
}, 1000));

function loadCurrentTime() {
  const time = JSON.parse(isTime);

  if (time) {
    player.setCurrentTime(time.seconds);
  }
}
loadCurrentTime();