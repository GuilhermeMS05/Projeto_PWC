$(document).ready(function () {
    //linkedin
    $(document).on("mouseenter", "#linkedinLogo", function () {
        $(this).find("img").attr("src", "assets/img/linkedinHover.png");
    });

    $(document).on("mouseleave", "#linkedinLogo", function () {
        $(this).find("img").attr("src", "assets/img/linkedin.png");
    });

    //facebook
    $(document).on("mouseenter", "#facebookLogo", function () {
        $(this).find("img").attr("src", "assets/img/facebookHover.png");
    });

    $(document).on("mouseleave", "#facebookLogo", function () {
        $(this).find("img").attr("src", "assets/img/facebook.png");
    });

    //Instagram
    $(document).on("mouseenter", "#instagramLogo", function () {
        $(this).find("img").attr("src", "assets/img/instagramHover.png");
    });

    $(document).on("mouseleave", "#instagramLogo", function () {
        $(this).find("img").attr("src", "assets/img/instagram.png");
    });

    //X
    $(document).on("mouseenter", "#xLogo", function () {
        $(this).find("img").attr("src", "assets/img/xHover.png");
    });

    $(document).on("mouseleave", "#xLogo", function () {
        $(this).find("img").attr("src", "assets/img/twitter.png");
    });
});