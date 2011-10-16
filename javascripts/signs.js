// This file contains the code that pulls from the "tweets" array (see tweets.js) and displays them on signs.
var signs = [];
var tweets_index = 0;
var signs_index = 0;

var display_tweet_on_sign = function(tweetObject, sign){
    $(sign).addClass("active");
    $(sign).html(tweetObject.text);
};

var take_down_sign = function(sign) {
    $(sign).removeClass("active");
    $(sign).html('');
}

var select_random_sign = function(){
    var random_sign, random_index;

    random_index = Math.floor(Math.random()*signs.length);
    random_sign = $(signs[random_index]);
    return random_sign;
}

var check_for_tweets = function(){
    if (tweets.length && signs.length){
        tweet = tweets[tweets_index];
        sign  = signs[signs_index];
        display_tweet_on_sign(tweet, sign);

        if (tweets_index + 1 < tweets.length){
            // if there are more tweets, increment index
            tweets_index += 1;
        }
        else {
            // otherwise, restart at 0
            tweets_index = 0;
        }

        if (signs_index + 1 < signs.length){
            // if there are more signs, increment index
            signs_index += 1;
        }
        else {
            // otherwise, restart at 0
            signs_index = 0;
        }

    }
}

$(function(){
    signs = jQuery("#sign1, #sign2, #sign3, #sign4, #sign5");
    setInterval(check_for_tweets, 2000);
});
