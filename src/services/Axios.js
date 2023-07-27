import axios from "axios";

const URL = 'https://economia.awesomeapi.com.br'

export const fetchCotationsDataUSD = async () => {
    try{
        const response = await axios.get(`${URL}/last/USD-BRL`);
        return response.data;
    } catch(error){
        console.log('Erro ao obter os dados da API:', error);
    };
}

export const fetchCotationsDataEUR = async () => {
    try{
        const response = await axios.get(`${URL}/last/EUR-BRL`);
        return response.data;
    } catch(error){
        console.log('Erro ao obter os dados da API:', error);
    };
}
export const fetchCotationsDataBTC = async () => {
    try{
        const response = await axios.get(`${URL}/last/BTC-BRL`);
        return response.data;
    } catch(error){
        console.log('Erro ao obter os dados da API:', error);
    };
}
