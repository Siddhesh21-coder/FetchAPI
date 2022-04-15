import {api_url,categ,api_key} from '../config/restconfig';

export async function getarticles() {
    try{
        let articles = await fetch(`${api_url}?q=${categ}&api-key=${api_key}`);
        let result = await articles.json();
        return result.response.docs();
    }catch(error)
    {
        throw error;
    }
}