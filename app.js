
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
    $("#btn4").click(function(){
        $("#test3").val("");
    });
    $("#btn5").click(function(){
        $("#test2").empty();
    });
    $("#btn6").click(function(){
        $("#test2").remove();
    });
    $("#btn7").click(function(){
        var text = $("#test2").html();
        $("#test1").html(text);
    });
    $("#btn8").click(function(){
        $("#test3").val("");
    });
    
});
