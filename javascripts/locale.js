// This file contains the code the make the site location specific.

var hashtag = 'occupyfdsf';  // used by twitter.js
var city = 'SF';  // the two letter city abbv
var parentUrl = 'http://occupysf.com';  // the site we want to link back to
var livestreamUrl = "cdn.livestream.com/embed/occupyfdsf";  // the livestream URL for both video and chat


$(function(){
    $("a.#navHome").attr("href", parentUrl);
    $("a.#navLive").html(city + ' Live');
    $("#chatContainer iframe").attr("src", "http://" + livestreamUrl + "?layout=6&showTimestamp=true&height=530&width=300");
    $("#vidPlayer iframe").attr("src", "http://" + livestreamUrl + "?layout=4&color=0xe7e7e7&autoPlay=true&mute=false&iconColorOver=0x888888&iconColor=0x777777&allowchat=true&height=295&width=480");
});