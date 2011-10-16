// This file contains the code that keeps the "tweets" variable update to date.
// "tweets" is an array of tweet objects.  it is updated by querying search.twitter.com for a hashtag specified by a global variable "hashtag".

var tweets = [];
var twitter_refresh_url;

// this function updates "var twitterResponse" from twitter.
// searches on hashtag and limits to tweetCount
var update_tweets = function(hashtag) {
  var base_url, query_string, tweetCount;
  tweetCount = 10;

  base_url = "http://search.twitter.com/search.json";

  if (twitter_refresh_url !== null && twitter_refresh_url !== undefined){
    query_string = twitter_refresh_url + "&callback=?";
  }
  else {
    query_string = "?callback=?&q=%23" + hashtag + "&rpp=" + tweetCount;
  }

  $.getJSON(base_url + query_string, function (response) {
    console.log("twitter response updated from: " + base_url + query_string);
    console.log(response);
    twitter_refresh_url = response.refresh_url;  // update our refresh url for next search
    tweets = tweets.concat(response.results);    // insert new tweets from twitter
  });
}

// run when page is loaded
$(function(){
  update_tweets(hashtag);
  setInterval(function(){ update_tweets(hashtag); }, 10000);
});
