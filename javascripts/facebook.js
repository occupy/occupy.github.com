$(function(){
    // Which appId do we use?
	// js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=125319027565797";
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=142371818162";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "facebook-jssdk"));
});