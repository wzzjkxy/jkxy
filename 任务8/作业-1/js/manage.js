var categroyarray = ["推荐", "百家", "本地", "娱乐"];
$(document).ready(function() {


    loaddata();
    $(".table").on("click", ".btndel", function() {

        var v = $(this).parents("tr").find(".myhiddenid").val();
        $.post("php/index.php", { action: 'del', id: v, categroy: '', imgpath: '', imgpath: '', title: '', desc: '' }, function(data) {
            if (data == 1) {
                alert("删除成功");
                location.href = "manage.html";
            } else
                alert("删除失败!");
        });

    });
    $(".table").on("click", ".btnedit", function() {

        $tdarray = $(this).parents("tr").find("td");
        var parmid = $(this).parents("tr").find(".myhiddenid").val();
        $("#id").val(parmid);
        $("#action").val("edit");
        $("#title").val($($tdarray[1]).text());
        $("#desc").val($($tdarray[2]).text());
        $("#imgpath").val($($tdarray[3]).text());
        $("#categroy").val($($tdarray[4]).attr("categroyid"));

    });
});




function loaddata() {


    //加载数据 
    $.post("php/index.php", { action: 'select', id: '', categroy: '0', imgpath: '', title: '', desc: '' }, function(data) {
        if ($.trim(data).length > 0) {
            var obj1 = $.parseJSON(data);


            var objnum = obj1.length;
            var strhtml = "";
            var numindex = 1;
            for (var i = 0; i < objnum; i++) {
                var obj2 = $.parseJSON(obj1[i]);

                strhtml += " <tr><td>" +
                    "<input type=\"hidden\" id=\"hiddenid\" name=\"hiddenid\" class=\"myhiddenid\" value=\"" + obj2.id + "\" />" + numindex + "</td>" +
                    " <td>" + obj2.title + "</td>" +
                    " <td>" + obj2.newdesc + "</td>" +
                    " <td>" + obj2.imgpath + "</td>" +
                    " <td categroyid=\"" + obj2.categroy + "\">" + categroyarray[obj2.categroy] + "</td>" +
                    "<td >" +
                    "<input type=\"button\" class=\"btn btn-default btnedit\" value=\"修改\"   />&nbsp;&nbsp;" +
                    "<input type=\"button\" class=\"btn btn-default btndel\" value=\"删除\"   /></td>  </tr>"
                numindex++;
            }

            $("#movetr").after(strhtml);
        }

    }).error(function(eventObject) {
        console.log(eventObject);

    });



}


function datasave(obj) {
    var action = $("#action").val();
    var title = $("#title").val();
    var desc = $("#desc").val();
    var imgpath = $("#imgpath").val();
    var categroy = $("#categroy").val();
    var id = $("#id").val();
    $.post("php/index.php", { action: action, id: id, categroy: categroy, imgpath: imgpath, title: title, desc: desc }, function(data) {
        console.log(data);
        if (data == 1) {
            $("#action").val("add");
            $("#title").val("");
            $("#desc").val("");
            $("#imgpath").val("");
            $("#categroy").val("");
            $("#id").val("");
            alert("添加成功!");
            location.href = "manage.html";
        } else {
            alert("添加失败");
        }


    });
}
