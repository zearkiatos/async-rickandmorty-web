import httpHelper from '../utils/httpHelper';
import config from '../config';

const getFirstCharacter = async () => {
    try {
        const data = await httpHelper.fetchData(`${config.RICKANDMORTY_API_BASE_URL}/character`);
        const character = await httpHelper.fetchData(`${config.RICKANDMORTY_API_BASE_URL}/character/${data.results[0].id}`);
        const origin = await httpHelper.fetchData(character.origin.url);
        return {
            count: data.info.count,
            name: character.name,
            dimension: origin.dimension
        }
    }
    catch(e) {
        console.error(e);
    }
};

export {
    getFirstCharacter
}