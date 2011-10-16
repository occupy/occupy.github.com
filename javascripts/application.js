var livestreamUrl;
var hashtag = 'occupyfdsf';  // used by twitter.js
var siteUrl = 'occupythehub.org';

var updateTwitterLink = function(event){
    $("#twitterText a.twitter-share-button").attr("data-text", $("#twitterText textarea").val());
};

var post_user_message = function(){
    var hacked_tweet = { "text" : $("#twitterText textarea").val() };
    display_tweet_on_sign(hacked_tweet, signs[signs_index]);
    if (signs_index + 1 < signs.length){
        // if there are more signs, increment index
        signs_index += 1;
    }
    else {
        // otherwise, restart at 0
        signs_index = 0;
    }
};

$(function(){
    $("#twitterText textarea").html('#' + hashtag + ' ');
    $("#twitterText textarea").keydown(updateTwitterLink);
    $("#twitterText a.twitter-share-button").click(post_user_message);

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=142371818162";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "facebook-jssdk"));
});