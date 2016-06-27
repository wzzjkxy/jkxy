function funleave( ) {

     $(".divmore").hide();
}

function funenter(obj) {
 
    $(".divmore").show();
}

function funtabenter(obj) {

    $(".divclass").removeClass("divactive");
    $(obj).addClass("divactive");
}

