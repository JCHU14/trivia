import { AppState } from "../AppState.js";
import { questionService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuestions() {
    const questions = AppState.questions
    let content = ''
    questions.forEach(question => content += question.QuestionTemplate)
    setHTML('question', content)

}

function _drawActiveQuestion() {
    const activeQuestion = AppState.activeQuestion

    if (!activeQuestion) {
        setHTML('question', '')
        return
    }

    console.log('draw active Question', activeQuestion);

    // @ts-ignore
    setHTML('question', activeQuestion.QuestionTemplate)
}


export class QuestionController {
    constructor() {
        this.getQuestions()
        AppState.on('questions', _drawQuestions)
    }


    getRandomQuestion() {
        questionService.getRandomQuestion()
        _drawActiveQuestion()
    }


    async getQuestions() {
        try {
            await questionService.getQuestions()

            Pop.success('got questions')

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}