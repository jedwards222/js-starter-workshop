import $ from 'jquery';
import './style.scss';

let number = 0;
setInterval(function () {
  $('#main').html('You\'ve been on this webpage for ' + number + ' seconds!');
  number++;
}, 1000);
