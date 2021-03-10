var particleNumber = 900;
let windowWidth = $(window).width();

if (windowWidth < 800 & windowWidth > 400) {
    particleNumber = 600;
} else if (windowWidth <= 400) {
    particleNumber = 400;
}


let body = document.getElementById("body-element")

const addNavActive = () => {
    if (body.classList.contains("nav-active"))
        body.classList.remove("nav-active");
    else
        body.classList.add("nav-active");
}

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#nav"]', function (e) {
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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("fav-logo-innerve").style.transform = "scale(1.3)";
    } else {
        document.getElementById("fav-logo-innerve").style.transform = "scale(0.9)";
    }
}

// countdown

// var InnerveDate = new Date("Mar 6,2021 09:00:00").getTime();

// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var timeLeft = InnerveDate - now;
//     // console.log(timeLeft, InnerveDate, now);

//     var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeLeft % (1000 * 60)) / (1000));

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;

// }, 1000)

const changeFaqIcon = (id) => {
    //console.log(id);
    if (document.getElementById(`${id}-qna-icon`).innerHTML == "+")
        document.getElementById(`${id}-qna-icon`).innerHTML = "-";
    else
        document.getElementById(`${id}-qna-icon`).innerHTML = "+";
}


// $(document).ready(function () {

//     // process the form
//     $('form').submit(function (event) {
//         var formData = {
//             'email': $('input[name=email]').val(),
//         };
//         $.ajax({
//             type: 'POST',
//             url: 'https://aitoss.club/api/v1/innerveReminder',
//             data: formData,
//             dataType: 'json',
//             encode: true
//         })
//             .done(function (data) {
//                 console.log(data);
//             });
//         event.preventDefault();
//     });

// });


const persons = [
    {
        name: "Rohan Chougule",
        photo: "https://media-exp1.licdn.com/dms/image/C5103AQGaCgq3V23bRw/profile-displayphoto-shrink_200_200/0/1585481116896?e=1618444800&v=beta&t=Y6SLSW9bqhZ_4yaprM5PoqqmU1sJzZd9rSyGIu4N7MI",
        title: "Browserstack",
        link: {
            linkedin: "https://www.linkedin.com/in/rohan-chougule/",
            twitter: ""
        }
    },

    {
        name: "Swastik Shrivastava",
        photo: "https://media-exp1.licdn.com/dms/image/C5603AQEeXkpgCjMc2w/profile-displayphoto-shrink_200_200/0/1516499176018?e=1618444800&v=beta&t=5PUlEG5_N5sgFIM3i-BGvoiIGx0tQ8lT3215mq9AwBk",
        title: "Mobile Premier League",
        link: {
            linkedin: "https://www.linkedin.com/in/swastik-shrivastava-cse/",
            twitter: ""
        }
    },
    {
        name: "Rajat Rawat",
        photo: "https://media-exp1.licdn.com/dms/image/C5603AQHX_duNoLrvtQ/profile-displayphoto-shrink_200_200/0/1517025545916?e=1618444800&v=beta&t=WhzeV22ofIIVOTxncX7c3W50mHBV-8CM7onp8A7OoNE",
        title: "Flipkart",
        link: {
            linkedin: "https://www.linkedin.com/in/rajat-rawat-cse/",
            twitter: ""
        }
    },
    {
        name: "Anirudh Murali",
        photo: "https://media-exp1.licdn.com/dms/image/C5103AQGKWgb7lxo47w/profile-displayphoto-shrink_200_200/0/1566639617441?e=1618444800&v=beta&t=5mpOosCtfAk11uJPX2c3frmWrbKCkB2xB7Z89PUdBzY",
        title: "ZS Associates",
        link: { linkedin: "https://www.linkedin.com/in/anirudh-murali/", twitter: "" }
    }
];

const app = new Vue({
    el: "#app",
    data() {
        return {
            persons: persons,
            selectedPersonIndex: null,
            isSelected: false,
            selectedPerson: null,
            // inlineStyles: null,
            isReady: false,
            isOk: false
        };
    }
});
