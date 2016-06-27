var alldata = { "imgdata": [{ "src": "img/01.jpg" }, { "src": "img/02.jpg" }, { "src": "img/03.jpg" }, { "src": "img/04.jpg" }, { "src": "img/05.jpg" }, { "src": "img/06.jpg" }, { "src": "img/07.jpg" }, { "src": "img/08.jpg" }, { "src": "img/09.jpg" }, { "src": "img/10.jpg" }, { "src": "img/11.jpg" }, { "src": "img/12.jpg" }] };


$(document).ready(function() {
    ImgLoad();
    ImgShow();
});




function ImgShow() {
    var columnheight = [];
    var ImgWidth = 180;
    var ImgMargion = 5;
    var windowwidth = $(document).width();
    var linenum = windowwidth / (ImgWidth + 2 * ImgMargion);
    linenum=Math.floor(linenum);
$(".box").each(function(index,element){

console.log($(element).find("img").position());
});

}


/*

function MouseSocll() {
    var lastbox = $(".box").last();

    var lastheigh = Math.floor(lastbox.height() / 2);
    var scrolltop = $(window).scrollTop();
    console.log(scrolltop);
    return Math.floor(lastbox.position().top) + lastheigh < scrolltop;


};

*/

function ImgLoad() {
    var parentElement = $("#container");

    $(alldata.imgdata).each(function(index, element) {
        var box = $("<div>").addClass("box").appendTo(parentElement);
        var content = $("<div>").addClass("content").appendTo(box);
        var img = $("<img>").attr("src", $(element).attr("src")).appendTo(content);
    });

}

window.onresize = function() {

}

window.onscroll = function() {}
