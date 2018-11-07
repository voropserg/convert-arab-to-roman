
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 

    $("#conv").on("submit", function(event){
        event.preventDefault();
        var data = $("#field1").val();
        $.ajax({
            type: "POST",
            data: {
                rData: data,
                csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val()
            },
            dataType: "json"
        }).done(function(resp){
            var res = resp["res"];
            var regex = /\d+/;
            if (regex.test(res)){
                $("#label1").html("Romanian");
                $("#label2").html("Arabic");
                $("#label2").css("width", "27.3%");
            }
            else if (res != ""){
                $("#label1").html("Arabic");
                $("#label2").html("Romanian");
                $("#label2").css("width", "28.6%");
            }
            $("#field2").val(res);
        })
    });

    $("#field1").on("keyup", function(){
        if ($("#instConv").prop("checked") == true){
            $("#conv").submit();
        }
    });
});