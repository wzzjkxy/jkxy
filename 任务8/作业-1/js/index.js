


$(function()
{

//绑定事件
$(".limore").on("click", function() {

    $(".menu .hide").removeClass("hide");
    $(this).addClass("hide");

})

$(".less").on("click", function() {

    $(".myless").addClass("hide");


    $(".limore").removeClass("hide");

});

loaddata(0);
})
var categroyarray = ["推荐", "百家", "本地", "娱乐"];
function loaddata(categroy) {


    //加载数据 
    $.post("php/index.php", { action: 'select', id: '', categroy: categroy, imgpath: '', title: '', desc: '' }, function(data) {
        if ($.trim(data).length > 0) {
            var obj1 = $.parseJSON(data);


            var objnum = obj1.length;
            var strhtml = "";
            
            for (var i = 0; i < objnum; i++) {
                var obj2 = $.parseJSON(obj1[i]);

                strhtml += "<div class=\"divdetail\"><div class=\"divimg\">  "+
                "<img src=\""+obj2.imgpath+"\"></div>"+
                "<div class=\"divtxt\">"+obj2.title+"</div>"+
                "<div class=\"divbottom\">"+
                "<b class=\"tip-reason\">"+categroyarray[obj2.categroy]+"</b>"+
                "<b class=\"tip-time\">"+obj2.createtime+"</b></div></div>"
            }

            $("#licontent").append(strhtml);
        }

    }).error(function(eventObject) {
        console.log(eventObject);

    });



}



   
                
                