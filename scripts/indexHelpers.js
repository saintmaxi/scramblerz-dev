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