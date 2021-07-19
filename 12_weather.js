$(function(){
    var apiURL= "http://api.openweathermap.org/data/2.5/weather?q=jeju&appid=547818a343e5943703fde57691cc7897";

    $.ajax({
        url:apiURL,
        dataType:"json",
        success:function(data){
            console.log(data);
            console.log("도시:"+data.name);
            console.log("풍속:"+data.wind.speed);
            // 캘빈온도이므로 -273.16
            console.log("온도 :"+(data.main.temp -273.16));
            console.log("날씨아이콘:"+data.weather[0].icon);

            $(".temp").html("온도:" +(data.main.temp -273.16));
            $(".wind").html("풍속:" +data.wind.speed);
            $(".city").html("도시:" +data.name);
            $(".weather").html("날씨:" +data.weather[0].main);
            $(".weatherIcon>img").attr("src","images/weather/"+data.weather[0].icon+".svg");
        }
    })
})