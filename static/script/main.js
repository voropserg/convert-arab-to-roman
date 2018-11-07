$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 

    $("form").submit(function(event){
        event.preventDefault();
        var data = $("#field1").val();
        console.log(data);
        $.ajax({
            type: "POST",
            data: {
                rData: data,
                csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val()
            },
            dataType: "json"
        }).done(function(resp){
            $("#field2").val(resp["res"]);
            console.log("Recived data:" + resp["res"]);
        })
    })
});