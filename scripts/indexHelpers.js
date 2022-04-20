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

function scrollStory(number) {
    // $('#story-info').scrollTop($('#story-info').scrollTop() + $(`#info-${number}`).position().top);
    var parentElement = document.querySelector('#story-info');
    var childElement = document.querySelector(`#info-${number}`);
  
    parentElement.scrollTop = childElement.offsetTop - parentElement.offsetTop - $("#story-info").innerHeight()*.25;

    $(`#info-1`).removeClass("active");
    $(`#info-2`).removeClass("active");
    $(`#info-3`).removeClass("active");
    $(`#info-4`).removeClass("active");
    $(`#info-${number}`).addClass("active");
}

document.getElementById("story-info").addEventListener('scroll', function() {
	var info1 = $('#info-1');
	var position1 = info1.position();
    var info2 = $('#info-2');
	var position2 = info2.position();
    var info3 = $('#info-3');
	var position3 = info3.position();
    var info4 = $('#info-4');
	var position4 = info4.position();

    let multiplier = .25 //if mobile change to .5

	// checking whether fully visible
    if (position4.top <= ($("#story-info").position().top + $("#story-info").innerHeight()*multiplier)) {
        $(`#scroll-1-`).removeClass("active");
        $(`#scroll-2`).removeClass("active");
        $(`#scroll-3`).removeClass("active");
        $(`#scroll-4`).addClass("active");
	}
    else if (position3.top <= ($("#story-info").position().top + $("#story-info").innerHeight()*multiplier)) {
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

var currentMember = 0;
const teamMembers = [
    {
        name: "Daniel<br>Norris",
        bio: "Something about Daniel goes here. Yadda yadda yadda.",
        img: "./images/stationaryegg.png",
        twitter: "https://twitter.com/dannyshelby_eth"
    },
    {
        name: "Charlotte<br>(ROLE)",
        bio: "Something about Charlotte goes here. Blah blah blah.",
        img: "./images/member2.png",
        twitter: "https://twitter.com/saintmaxiv"
    },
    {
        name: "Member 3<br>(ROLE)",
        bio: "Something about Member 3 goes here. Blah blah blah.",
        img: "./images/stationaryegg.png",
        twitter: "https://twitter.com/dannyshelby_eth"
    },
    {
        name: "Member 4<br>(ROLE)",
        bio: "Something about Member 4 goes here. Blah blah blah.",
        img: "./images/member2.png",
        twitter: "https://twitter.com/saintmaxiv"
    }
]

function showPrevMember() {
    if (currentMember != 0) {
        currentMember -= 1;
        let member = teamMembers[currentMember]
        $("#member-name").html(member.name);
        $("#member-description").html(member.bio);
        $("#member-img").attr("src", member.img);
        $("#member-twitter-link").attr("href", member.twitter);

        if (currentMember == 0) {
            $("#team-controls #left").addClass("disabled");
            $("#mobile-team-controls #left").addClass("disabled");
        }
        else {
            $("#team-controls #left").removeClass("disabled");
            $("#mobile-team-controls #left").removeClass("disabled");
        }
        if (currentMember == (teamMembers.length - 1)) {
            $("#right").addClass("disabled");
        }
        else {
            $("#right").removeClass("disabled");
        }
    }
}

function showNextMember() {
    if (currentMember != (teamMembers.length - 1)) {
        currentMember += 1;
        let member = teamMembers[currentMember]
        $("#member-name").html(member.name);
        $("#member-description").html(member.bio);
        $("#member-img").attr("src", member.img);
        $("#member-twitter-link").attr("href", member.twitter);

        if (currentMember == 0) {
            $("#team-controls #left").addClass("disabled");
            $("#mobile-team-controls #left").addClass("disabled");
        }
        else {
            $("#team-controls #left").removeClass("disabled");
            $("#mobile-team-controls #left").removeClass("disabled");
        }
        if (currentMember == (teamMembers.length - 1)) {
            $("#team-controls #right").addClass("disabled");
            $("#mobile-team-controls #right").addClass("disabled");
        }
        else {
            $("#team-controls #right").removeClass("disabled");
            $("#mobile-team-controls #right").removeClass("disabled");
        }
    }
}