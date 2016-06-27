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

function hffun(){
 $(".hfh").addClass("hfs").removeClass('hfh');


}
$("#hf").on('click','.hfs',function(){

	var mycolor=$(this).attr("data-color");
 $("body").css("color",mycolor);
  $(".hfs").addClass("hfh").removeClass('hfs');
})
 