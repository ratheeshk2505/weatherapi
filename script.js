// var input = document.getElementById("city");
//   input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//      event.preventDefault();
//      document.getElementById("myBtn").click();
//     }
//   });


function fetchTemp(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=4687584c8033f824fa0c2b8920b149ef`).then(res=>res.json()).then(data=>displayValues(data))
   
}

function displayValues(data){
        // console.log(data.cod);
        if(data.cod>399){
            disp.innerHTML=`<div class="text-center text-white p-1 mt-3 border border-secondary col-12" style="background-color: rgb(0, 0, 0"><span class="fs-2">City Not Found.</span></div>`;
        }
        else{
        // console.log(data.dt);
        // console.log(data.timezone);
        let mytz=19800;
        let unixData=data.dt-mytz+data.timezone;
        // console.log(unixData);
        let loc_time=unixToDate(unixData);
        // let loc_time=unixToDate(data.dt);
        // console.log(loc_time);
        let icon_url=`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let html_data=`<div class="container-fluid">
                        <div class="row mt-3 border border-dark bg-light">
                            <div class="text-center text-white p-0 " style="background-color: rgb(0, 0, 0"><span class="fs-1 fw-larger">${data.name}, ${data.sys.country}</span></div>
                            <div class="text-end text-white" style="background-color: rgb(0, 0, 0"><span class="fs-6"> As on: ${loc_time}</span></div>
                            <div class="col-sm-12 col-md-6 col-lg-4 p-3 mt-4 text-center"><img src="${icon_url}" width="100px"><span class="fs-2"> <b>${data.weather[0].main}</b></span><br><span class="ms-5 fs-6 fst-italic">  ${data.weather[0].description}</span></div>
                            <div class="col-sm-12 col-md-6 col-lg-4 p-3 text-center">
                                <div class="p-2"><span class="" style="font-size: 50px"> <b>${data.main.temp}</b> <sup><span class="fs-5 fw-bold"> &#8451;</span> <span class="fs-5" style="color: grey">| &#8457;</span></sup></span></div>
                                <div class="p-3 my-3">
                                    <i class="fas fa-temperature-high"></i><span class="fs-5"> Highest Temp: <b>${data.main.temp_max}</b></span><sup><span class=""> &#8451;</span></sup><br>
                                    <i class="fas fa-temperature-low"></i><span class="fs-5"> Lowest Temp: <b>${data.main.temp_min}</b></span><sup><span class=""> &#8451;</span></sup>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 p-3">
                                <div class="p-3 text-center">
                                    <span class="fs-5 p-2"> Humidity: <b>${data.main.humidity}</b></span><span>&#37;</span> <br>
                                    <span class="fs-5 p-2"> Pressure: <b>${data.main.pressure}</b></span><span>hPa</span>
                                </div>
                                <div class="p-2 text-center mt-3">
                                    <h5 class="fs-5"> Wind</h5>
                                    <span class="fs-6 p-2"> Speed: <b><span class="fs-5">${data.wind.speed}</b></span></span><span>m/s</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
        disp.innerHTML=html_data;
    }
}
function unixToDate(timestamp){
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if(min<10){
        min='0'+min;
    }
    // var sec = a.getSeconds();
    var time = month + ' ' + date + ', ' + hour + ':' + min ;
    return time;
  }


