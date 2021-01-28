alert("palak dhokebaaz hai!");
let body = document.getElementById("body-element")

const addNavActive = () => {
    if (body.classList.contains("nav-active"))
        body.classList.remove("nav-active");
    else
        body.classList.add("nav-active");
}

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#nav"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('html,body').animate({ scrollTop: pos });
});

const findBrowser = () => {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;


    var output = 'Detecting browsers by ducktyping:<hr>';
    output += 'isFirefox: ' + isFirefox + '<br>';
    output += 'isChrome: ' + isChrome + '<br>';
    output += 'isSafari: ' + isSafari + '<br>';
    output += 'isOpera: ' + isOpera + '<br>';
    output += 'isIE: ' + isIE + '<br>';
    output += 'isEdge: ' + isEdge + '<br>';
    output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
    output += 'isBlink: ' + isBlink + '<br>';
    console.log(output);
    if (isFirefox) {
        body.classList.add("black-background");
    }
}

findBrowser();


// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("fav-logo-innerve").style.height = "4em";
//         document.getElementById("fav-logo-innerve").style.width = "4em";
//     } else {
//         document.getElementById("fav-logo-innerve").style.height = "3em";
//         document.getElementById("fav-logo-innerve").style.width = "3em";
//     }
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("fav-logo-innerve").style.transform = "scale(1.3)";
  } else {
    document.getElementById("fav-logo-innerve").style.transform = "scale(0.9)";
  }
}

// countdown

var InnerveDate = new Date("Feb 25,2021 09:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = InnerveDate - now;
    // console.log(timeLeft, InnerveDate, now);

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000)
