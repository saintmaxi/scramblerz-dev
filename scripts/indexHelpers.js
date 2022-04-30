$(function() {
    var trait = $(".trait");
    var art = $("#art");
    var artBottom = art.offset().top + art.outerHeight()*.75;
    var windowHeight = $(window).height();


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        // let's fire up animation when .box is in view

        if ( scroll >= ( artBottom - windowHeight )) {
            trait.addClass("animate");
        } 
    });
});

$('#mouth').on("animationend", function(){
    $(".trait").css('display', 'none');
    $("#body").css('display', 'block');
    $("#body").attr("src", "images/sampleegg.gif")
});

// $('#shoes').on("animationend", function(){
//     $("#art-info").addClass("animate");
// });

var muted = true;
var audio = $("#song")[0];

function mute() {
    if (muted) {
        muted = false;
        $("#sound-control").attr("src", "./images/unmute.png");
        audio.play();
    }
    else {
        muted = true;
        $("#sound-control").attr("src", "./images/mute.png");
        audio.pause();
    }
}

var windowsize = $(window).width();

function scrollStory(number) {
    // $('#story-info').scrollTop($('#story-info').scrollTop() + $(`#info-${number}`).position().top);
    var parentElement = document.querySelector('#story-info');
    var childElement = document.querySelector(`#info-${number}`);

    let multiplier = windowsize >= 991 ? .05 : 0;
    // multiplier=0
  
    parentElement.scrollTop = childElement.offsetTop - parentElement.offsetTop - $("#story-info").innerHeight()*multiplier;

    $(`#info-1`).removeClass("active");
    $(`#info-2`).removeClass("active");
    $(`#info-3`).removeClass("active");
    // $(`#info-4`).removeClass("active");
    parentElement.scrollTop += 1;
}

document.getElementById("story-info").addEventListener('scroll', function() {
	var info1 = $('#info-1');
	var position1 = info1.position();
    var info2 = $('#info-2');
	var position2 = info2.position();
    var info3 = $('#info-3');
	var position3 = info3.position();
    // var info4 = $('#info-4');
	// var position4 = info4.position();

    let multiplier = windowsize >= 991 ? .25 : .55;
    // let multiplier = 0

	// checking whether fully visible
    // if (position4.top <= ($("#story-info").position().top + $("#story-info").innerHeight()*multiplier)) {
    //     $(`#scroll-1-`).removeClass("active");
    //     $(`#scroll-2`).removeClass("active");
    //     $(`#scroll-3`).removeClass("active");
    //     $(`#scroll-4`).addClass("active");
	// }
    if (position3.top <= ($("#story-info").position().top + $("#story-info").innerHeight()*multiplier)) {
        $(`#scroll-1`).removeClass("active");
        $(`#scroll-2`).removeClass("active");
        $(`#scroll-3`).addClass("active");
        $(`#scroll-4`).removeClass("active");
	}
    else if (position2.top <= ($("#story-info").position().top + $("#story-info").innerHeight()*multiplier)) {
        $(`#scroll-1`).removeClass("active");
        $(`#scroll-2`).addClass("active");
        $(`#scroll-3`).removeClass("active");
        $(`#scroll-4`).removeClass("active");
	}
	else if (position1.top <= ($("#story-info").position().top + $("#story-info").innerHeight()*multiplier)) {
        $(`#scroll-1`).addClass("active");
        $(`#scroll-2`).removeClass("active");
        $(`#scroll-3`).removeClass("active");
        $(`#scroll-4`).removeClass("active");
	}
});

var story = $("#story").position().top;
var team =  $("#team").position().top;

document.addEventListener('scroll', function() {
    let currentTop = $(window).scrollTop();
    if (currentTop < story) {
        $("#top").addClass("landing");
        $("#top").removeClass("team");
        $("#top").removeClass("story");
    }
    else if (currentTop >= story && currentTop < team) {
        $("#top").addClass("story");
        $("#top").removeClass("landing");
        $("#top").removeClass("team");
    }
    else if (currentTop >= team) {
        $("#top").addClass("team");
        $("#top").removeClass("story");
        $("#top").removeClass("landing");
    }
});

var info1Top = $('#info-1').position().top;
var info3Top = $('#info-3').position().top;
let infoDist = info3Top - info1Top;
var infoScrollEffectOn = true;

document.getElementById("story-info").addEventListener('scroll', function() {
    if (infoScrollEffectOn) {
        let info3CurrentTop = $("#info-3").position().top;
        let currentDist = info3CurrentTop - info1Top;
        let scrollPercentage = (infoDist-currentDist)/infoDist;
        if (scrollPercentage > 0.1) {
            $("#story-img").css("opacity", scrollPercentage);
        }
        if (scrollPercentage > 0.9) {
            $("#story-img").attr("src", "./images/egg1.gif");
            infoScrollEffectOn = false;
        }
    }
});


var currentMember = 0;
const teamMembers = [
    {
        name: "DANIEL<br>NORRIS",
        bio: "Something about Daniel goes here. Yadda yadda yadda.",
        img: "./images/stationaryegg.png",
        twitter: "https://twitter.com/dannyshelby_eth",
        stats: {
            //insert specific stats here, change ids in index html
        }
    },
    {
        name: "CHARLOTTE<br>UDDFORS",
        bio: "Something about Charlotte goes here. Blah blah blah.",
        img: "./images/member2.png",
        twitter: "https://twitter.com/saintmaxiv"
    },
    {
        name: "WIN<br>HOMER",
        bio: "Something about Win goes here. Blah blah blah.",
        img: "./images/stationaryegg.png",
        twitter: "https://twitter.com/dannyshelby_eth"
    }
]

function showPrevMember() {
    if (currentMember != 0) {
        currentMember -= 1;
        let member = teamMembers[currentMember]
        $("#team-member-name").html(member.name);
        $("#team-member-caption").html(member.bio);
        // $("#member-img").attr("src", member.img);
        $("#team-member-twitter-link").attr("href", member.twitter);

        if (currentMember == 0) {
            $("#team-member-controls #prev-member").addClass("disabled");
            // $("#mobile-team-controls #left").addClass("disabled");
        }
        else {
            $("#team-member-controls #prev-member").removeClass("disabled");
            // $("#mobile-team-controls #left").removeClass("disabled");
        }
        if (currentMember == (teamMembers.length - 1)) {
            $("#next-member").addClass("disabled");
        }
        else {
            $("#next-member").removeClass("disabled");
        }
    }
}

function showNextMember() {
    if (currentMember != (teamMembers.length - 1)) {
        currentMember += 1;
        let member = teamMembers[currentMember]
        $("#team-member-name").html(member.name);
        $("#team-member-caption").html(member.bio);
        // $("#member-img").attr("src", member.img);
        $("#team-member-twitter-link").attr("href", member.twitter);

        if (currentMember == 0) {
            $("#team-member-controls #prev-member").addClass("disabled");
            // $("#mobile-team-controls #left").addClass("disabled");
        }
        else {
            $("#team-member-controls #prev-member").removeClass("disabled");
            // $("#mobile-team-controls #left").removeClass("disabled");
        }
        if (currentMember == (teamMembers.length - 1)) {
            $("#team-member-controls #next-member").addClass("disabled");
            // $("#mobile-team-controls #right").addClass("disabled");
        }
        else {
            $("#team-member-controls #next-member").removeClass("disabled");
            // $("#mobile-team-controls #right").removeClass("disabled");
        }
    }
}