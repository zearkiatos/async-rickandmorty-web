import httpStatus from "http-status-codes";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === httpStatus.OK
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`Error in ${urlApi}`));
      }
    };
    xhttp.send();
  });
};

export default { fetchData };
