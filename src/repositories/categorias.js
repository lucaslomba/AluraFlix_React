import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {

        if(response.ok){
            const resposta = await response.json();

            return resposta;     
        }

        throw new Error('Não foi possivel retornar os dados');
        
    });
}

export default{
    getAllWithVideos,
}