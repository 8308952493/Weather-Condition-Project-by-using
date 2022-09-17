let textbody=document.getElementById("value");
let watavaran=document.getElementById("weather");

const key='18c9ce84016bf39727c21562ee799c1e';
let url;
function search(){
    let searchquery=textbody.value;
    console.log(searchquery);
    url=`https://api.openweathermap.org/data/2.5/weather?q=${searchquery}&appid=${key}`;
    fetch(url).then((res)=>{
        res.json().then((data)=>{
            console.log(data);
        let html=`
        <div>
            <h1>${data.name}</h1>
            <div class="span"><span>Minimum Temp:-${data.main.temp_min}</span> / <span>Maximum Temp:-${data.main.temp_max}</span> / <span>Wind Speed ${data.wind.speed}</span></div>
        </div>
        `
        watavaran.innerHTML=html;
        })
    })
}