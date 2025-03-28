require('dotenv').config();
const express = require("express");
const app = express()


app.set("view engine",'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))




const port = 3000;

app.get("", async (req,res)=>{

 

    res.render("index.ejs")

})


app.post("/send", async (req, res) => {
    var city = req.body.city;
    if(city=="rahim yar khan"){
        city = "naushahra"
    }

    // Fetch weather data for the provided city
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.open_weather_api}&units=metric`);

        // If the response code is not 200 (OK), handle the error
        if (!response.ok) {
            throw new Error("City not found");
        }

        // Parse the response data
        const data = await response.json();
        console.log(data)
        // Render the EJS template with weather data if the city is valid
        res.render("index.ejs", {
            weather: data,
            error: null
        });


    } catch (error) {
        // In case of an error (e.g., city not found), render with the error message
        res.render("index.ejs", {
            weather: null,
            error: "City not found. Please try another city."
        });
    }
});




app.listen(port,()=>{
    console.log(`App is running on port: localhost:${port}`)
})