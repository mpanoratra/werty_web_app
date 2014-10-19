var ready;
ready = function() {
if(document.location.href.match(/[^\/]+$/) != null) {
        if(document.location.href.match(/[^\/]+$/)[0] == "sign_up" || document.location.href.match(/[^\/]+$/)[0] == "sign_in" ||
             document.location.href.match(/[^\/]+$/)[0] == "new"){
              $(".main_header").addClass("hide");
        }
}

$( "#create_btn, #create_btn > a" ).mouseenter(function() {
     $("#create_btn").addClass("hideBack");
     $("#create_btn").removeClass("shownBack");
});

$( "#create_btn, #create_btn > a").mouseleave(function() {
     $("#create_btn").addClass("shownBack");
     $("#create_btn").removeClass("hideBack");
});

$( "#fake_sign_in_btn").click(function() {
     $("#sign_in").removeClass("hide");
     $(".hiddenText").removeClass("hide");
     $("#fake_sign_in_btn").addClass("hide");

});
$( "#company, #company > button").click(function() {
     $("#path_info").addClass("hide");
     $(".form").removeClass("hide");
});
$( "#individual, #individual > button").click(function() {
     $("#path_info").addClass("hide");
     $(".form").removeClass("hide");
});


}
$(document).ready(ready);
$(document).on('page:load', ready);
