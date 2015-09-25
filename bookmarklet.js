(function () {
    if (typeof(ikr500px) === "undefined") {
        var link = document.createElement("link");

        $(link).attr({
            "rel": "stylesheet",
            "href": "https://raw.githubusercontent.com/lokesh/lightbox2/master/src/css/lightbox.css",
            "type": "text/css"
        });
    
        $("head").append(link);

        $.getScript("https://raw.githubusercontent.com/lokesh/lightbox2/master/src/js/lightbox.js", function () {
            $.getScript("http://krechetov.net/~ikr/500px-slideshow/500px-slideshow.js", function () {
                ikr500px.slideshow();
            });
        });
    }
    else {
        ikr500px.slideshow();
    }
}());
