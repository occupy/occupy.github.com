// TODO: create the crowd manager.  he is responsible for taking down tweeters, and putting up tweeters, making sure there aren't too many up etc.
// start off w/ elements that are active vs inactive
// when they tweet, they become active
// they also get a sign that pops up for some period of time, comes down when the crowd manager says so.
// 

// names are more fun!  but it is still an ordered set for those who prefer that.
var names = ["anna", "brad", "carson", "dawson"];

// var person = find_inactive_person();
// make_a_person_heard(person, tweetObject)



var make_a_person_heard = function(person, message){
    $(person).addClass(".active");
    display_sign(person, message);
}

// solely responsible for displaying a tweet for a given 'person'
// makes the person active and displays a tweet.
var display_tweet_on_sign = function(tweetObject){
    $("#sign1").addClass("active");
    $("#sign1").html(tweetObject.text);
};

var find_inactive_person = function(;


