const innerve = '25 feb 2021';
// set interval to milliseconds
var interval = 1000;

setInterval(function(){
  // duration = moment.duration(duration - interval, 'milliseconds');

  var newYearsDate = new Date(innerve);
  var currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) /1000;
  const minutes = Math.floor(totalSeconds/ 60) % 60;
  const hours = Math.floor(totalSeconds /3600) % 24;
  const days = Math.floor(totalSeconds /3600/ 24);
  const seconds = Math.floor(totalSeconds) % 60;
  $('#clock').html(
      "<div class=\'days cell\'>"+days+"<span>days</span></div>" +
      "<div class=\'hours cell\'>"+hours+"<span>hours</span></div>" +
      "<div class=\'mins cell\'>"+minutes+"<span>mins</span></div>" +
      "<div class=\'secs cell\'>"+seconds+"<span>secs</span></div>")
}, interval)

// for slick slider

// $('.gal').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,

// });


var sickPrimary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  asNavFor: '.text-slider',
  centerMode: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
}

var sickSecondary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  asNavFor: '.image-slider',
  prevArrow: $('.prev'),
  nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);
