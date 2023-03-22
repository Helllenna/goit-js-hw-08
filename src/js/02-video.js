import Throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';
let isTime = localStorage.getItem(KEY);

function CurrentTime(ev) {
  localStorage.setItem(KEY, ev.seconds);
}

function getCurrentTime(ev) {
  if (isTime) {
    player.setCurrentTime(isTime);
    player.off('play', getCurrentTime);
  }
  player.on('timeupdate', Throttle(CurrentTime, 1000));
}

player.on('play', getCurrentTime);
