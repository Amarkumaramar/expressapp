const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');



const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){ 
        city_name.innerText = `Plz write the name before search`; 
        datahide.classList.add('data_hide');      
    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=88c6f903b3fe6e631f7d3d395c040a93`;
            const response = await fetch(url);
            const data  =await response.json();
            const arrData =[data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = (arrData[0].main.temp -273.15).toFixed(1);

            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear"){
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
                }else if (tempMood == "Clouds") {
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
                }else if (tempMood == "Rain") {
                temp_status.innerHTML = 
                    "<i class ='fas fa-cloud' style='color:#a4b0be;'></i>" ;
                }else {
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>"
                } 
                
                datahide.classList.remove('data_hide'); 

        }catch{
            city_name.innerText = `Plz Enter the city name properly`;
            datahide.classList.add('data_hide'); 
        }
    }
}
        


submitBtn.addEventListener("click",getInfo);