$(function () {
    // #htmlBtn을 클릭하면 .list안을 비우고 11_total.html에서 li들을 불러서 .list 안에 넣기
    $("#htmlBtn").on("click", function () {
        $("#list").empty();
        $.ajax({
            url: "11_total.html",
            dataType: "html",
            success: function (data) {
                $("#list").append($(data).find("li"))
            }
        })
    })
    // #xmlBtn을 클릭하면 .list안을 비우고 11_total_xml.xml에서 score를 찾아서 .list안에 li안에 넣기
    $("#xmlBtn").on("click",function(){
        $("#list").empty();
        $.ajax({
            url:"11_total_xml.xml",
            dataType:"xml",
            success:function(data){
                $(data).find("score").each(function(){
                    $("#list").append(`<li>${$(this).text()}</li>`)
                })
            }
        })
    })
    // #jsonBtn을 클릭하면 .list안을 비우고 11_total_json.json에서 grade의 year를 .list의 li안에 붙이기
    $("#jsonBtn").on("click", function () {
        $("#list").empty();
        $.ajax({
            url: "11_total_json.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                console.log(data.school);
                console.log(data.grade);
                $(data.grade).each(function () {
                    $("#list").append(`<li>${this.year}</li>`);
                })
            }
        })
    })
})