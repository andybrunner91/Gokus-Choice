$(".trainButton").click(function() {
    $(".storyText").text("Goku trains! Double click the image to continue");
    $(".trainPic").show();
    $(".intro").hide();
});

$(".sleepButton").click(function() {
    $(".storyText").text("Goku sleeps! Hover over the picture to continue");
    $(".sleepPic").slideDown();
    $(".intro").slideUp();
});

$(".sleepPic").hover(function() {
    $(".storyText").text("The Saiyans destroy the earth :'(");
    $(".sleepPic").slideUp();
    $(".earthDestroyed").fadeIn();
});

$(".trainPic").dblclick(function() {
    $(".storyText").text("Goku defeats the Siayans and Earth is saved!");
    $(".trainPic").slideUp();
    $(".gokuFights").slideDown();
    $(".celebrate").fadeIn();

});


$(".trainPic").hide();
$(".sleepPic").hide();
$(".earthDestroyed").hide();
$(".gokuFights").hide();
$(".celebrate").hide();