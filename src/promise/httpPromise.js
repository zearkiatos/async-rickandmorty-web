const config = require('../config').default;
const httpHelper = require('../utils/httpHelper').default;
const getCharacters = () => {
    const response = httpHelper.fetchData(`${config.RICKANDMORTY_API_BASE_URL}/character`).then(data => {
        return data;
    });
    return response;
};

const getCharacter = (id) => {
    const response = httpHelper.fetchData(`${config.RICKANDMORTY_API_BASE_URL}/character/${id}`).then(data => {
        return data;
    });
    return response;
};

const getLocation = (url) => {
    const response = httpHelper.fetchData(url).then(data => {
        return data;
    });
    return response;
}

export {
    getCharacters,
    getCharacter,
    getLocation
}