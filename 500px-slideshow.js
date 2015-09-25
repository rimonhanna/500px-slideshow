var ikr500px = {
    thumbnailImgNodes: function () {
        return jQuery("div.photo > a > img");
    },

    fullSizeImageUrl: function (thumbnailUrl) {
        return thumbnailUrl.substr(0, thumbnailUrl.lastIndexOf("/")) + "/4.jpg";
    },

    populateLightboxContainer: function (prependTo) {
        jQuery("#ikr500px-lightbox-root").remove();
        jQuery(prependTo).prepend('<div id="ikr500px-lightbox-root" style="display: none"/>');

        var that = this;

        this.thumbnailImgNodes().each(function () {
            var url = that.fullSizeImageUrl(jQuery(this).attr("src"));

            jQuery("#ikr500px-lightbox-root").append(
                '<a href="' + url + '" rel="lightbox[ikr500px-slideshow]" class="ikr500px-lightbox-a">' + url + '</a>'
            );
        });
    },

    slideshow: function () {
        this.populateLightboxContainer('body');

        jQuery(".ikr500px-lightbox-a").lightbox({
            fileLoadingImage: "https://raw.githubusercontent.com/lokesh/lightbox2/master/dist/images/loading.gif",
            fileBottomNavCloseImage: "https://raw.githubusercontent.com/lokesh/lightbox2/master/dist/images/close.png"

        });

        jQuery(".ikr500px-lightbox-a").first().trigger("click");
    }
};
