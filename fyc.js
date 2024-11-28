const url = `https://freetestapi.com/api/v1/cars`;
const api_key = "live_r8DHmCxxYvVXRGMgQVkWvHxVmXxtPPt8LtT2VelnAy8sCHlfVdErypSbmiFa5Fgv"
let storedCar = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   
  storedCars = data;
   
   for (let i = 0; i < storedCars.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!car.image)continue
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${car.name}`;
document.getElementById('car_selector').appendChild(option);
    
    }
   //show the first breed by default
   showCarImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showCarImage(index)
{ 
  document.getElementById("car_image").src= storedCar[index].image.url;
  
  document.getElementById("car_json").textContent= storedCar[index].temperament
  
  
  document.getElementById("wiki_link").href= storedCar[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= storedCar[index].wikipedia_url
}
