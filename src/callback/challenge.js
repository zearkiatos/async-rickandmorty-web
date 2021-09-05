import httpStatus from 'http-status-codes';
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(urlApi, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === httpStatus.OK) {
                callback(null, JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error(`Error in ${urlApi}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}