import axios from 'axios';

async function getQuestions(){
    const response = await axios.get('http://127.0.0.1:8000/dndsurvey/home/get_questions');
    return response.data;
}

export {getQuestions};