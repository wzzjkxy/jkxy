function funenter() 
{
    $("#divcenter-2").show();
}

function funleave() 
{
    $("#divcenter-2").hide();
}

$(document).ready(function() {

    $(".top-2-left ul li").on("mouseenter", function() {
        var obj = $(this).attr("newattr");
        $(obj).addClass("top-2-div-active");

    });

    $(".top-2-left ul li").on("mouseleave", function() {

        $(".top-2-div").removeClass("top-2-div-active");
    });

    var myarray = ["img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg", "img/07.jpg"];
    var i = 0;
    setInterval(function() {
        if (i > 5) i = 0;
        $("#top-2-center-img").attr("src", myarray[i]);
        $(".top-2-center-1 span").eq(i).css("background-color", "#35b558").siblings().css("background-color", "#fff");
        i++;
    }, 1500);

    $(".menu-2>ul li").on("mouseenter", function() {

        $(this).addClass("on").siblings().removeClass("on");
        var jsid = $(this).attr("data-attr");
        $(".menu-2-content").removeClass("menu-content-on");
        $("#" + jsid).addClass("menu-content-on");
    });

});
