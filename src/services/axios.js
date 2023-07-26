import axios from "axios";

const URL = 'https://economia.awesomeapi.com.br'

export const fetchCotationsData = async () => {
    try{
        const response = await axios.get(`${URL}/last/USD-BRL,EUR-BRL,BTC-BRL`);
        return response.data;
    } catch(error){
        console.log('Erro ao obter os dados da API:', error);
    };
}
