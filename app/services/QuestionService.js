import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"



class QuestionService {
    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=15&type=boolean')
        console.log('got questions', response.data.results)
        const newQuestion = response.data.results.map(questionPOJO => new Question(questionPOJO))
        AppState.questions = newQuestion
        console.log('app state questions', AppState.questions);
    }
    getRandomQuestion() {






        const questions = AppState.questions
        const randomIndex = Math.floor(Math.random() * questions.length)
        const randomQuestion = questions[randomIndex]



        AppState.activeQuestion = randomQuestion


        AppState.questions.push(randomQuestion)

        AppState.emit('myQuestions')
    }


}

export const questionService = new QuestionService()