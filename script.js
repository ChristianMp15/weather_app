//Weather Api Key
const apiKey = "3fbb126817b0a731739e8ea1da7c340e"
// Weather URL
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
$("input[type=submit]").on("click", (event) => {
    // prevent the refresh
    event.preventDefault();
  
    // grab text from input box
    const inputText = $("input[type=text]").val();
  
    // update the screen
    $.ajax(baseURL + `q=${inputText}&appid=` + apiKey).then(
      function (data) {
        const kelvin = data.main.temp;
      const celcius = kelvin - 273.15;
      const farenheit = celcius * 1.8 + 32;
      const $main = $("main");
      $main.empty();
      $main.html(`
        <h1>${data.name}</h1>
        <p> Temp: ${~~kelvin} K</p>
        <p> Temp: ${Math.floor(celcius)} C  
        <p> Temp: ${parseInt(farenheit).toFixed(1)} F</p> 
        <p> Wind Speed: ${data.wind.speed}</p>
       `);
      console.log("Data: ", data);
      document.getElementById("location").value = "";
    },
    function (error) {
      console.log("Error: ", error);
    }
  );
});
