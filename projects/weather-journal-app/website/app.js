/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const key = '0faabf186f57bb12db818b9996a6ba3c';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const postCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(baseURL, postCode, key)
        .then(function (data) {
            // Add data to POST request
            postData('/add', {temperature: data.main.temp, date: newDate, user_response: feelings})
                // Function which updates UI
                .then(function () {
                    updateUI();
                })
        })
}


const getWeather = async (baseURL, zip, key) => {
    const response = await fetch(baseURL + zip + ',egy' + '&appid=' + key)
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

const postData = async (url = '', data = {}) => {
    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}


const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.user_response;
    } catch (error) {
        console.log('error', error);
    }
}