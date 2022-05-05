$(function() {
    let trait = $(".trait");
    let art = $("#art");
    let artBottom = art.offset().top + art.outerHeight()*.75;
    let windowHeight = $(window).height();


    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

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

let angle = document.querySelector("#eyeball-1");
let coords = angle.getBoundingClientRect()
let p2 = {
  x: (coords.right + coords.left)/2,
  y: (coords.top + coords.bottom)/2
};
document.addEventListener("mousemove", function(e) {
  let p1 = {
    x: e.pageX,
    y: e.pageY
  };
  let angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
  let rotation = 270-Math.abs(Math.round(angleDeg));
  $(".eyeball").css("transform", `rotate(${rotation}deg)`)
})

// $('#shoes').on("animationend", function(){
//     $("#art-info").addClass("animate");
// });

let muted = true;
let audio = $("#song")[0];

function mute() {
    if (muted) {
        muted = false;
        $("#music-button").attr("src", "./images/unmuted.png");
        audio.play();
    }
    else {
        muted = true;
        $("#music-button").attr("src", "./images/muted.png");
        audio.pause();
    }
}

$("#early-access-clickable").hover(
    function() {
      $("#early-access").css("opacity", .6);
    }, function() {
        $("#early-access").css("opacity", 1);
    }
  );

let windowsize = $(window).width();

function scrollStory(number) {
    // $('#story-info').scrollTop($('#story-info').scrollTop() + $(`#info-${number}`).position().top);
    let parentElement = document.querySelector('#story-info');
    let childElement = document.querySelector(`#info-${number}`);

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
	let info1 = $('#info-1');
	let position1 = info1.position();
    let info2 = $('#info-2');
	let position2 = info2.position();
    let info3 = $('#info-3');
	let position3 = info3.position();
    // let info4 = $('#info-4');
	// let position4 = info4.position();

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

let story = $("#story").position().top;
let team =  $("#team").position().top;

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

let info1Top = $('#info-1').position().top;
let info3Top = $('#info-3').position().top;
let infoDist = info3Top - info1Top;
let infoScrollEffectOn = true;

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


let currentMember = 0;
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