



export class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }



    get QuestionTemplate() {
        return `
        <div class="row text-center justify-content-center">
        <p class="boxbrdr bg-secondary m-4 fs-1 col-9">${this.question}</p>
            <p type="button" class="boxbrdr bg-secondary m-4 fs-3 col-4">${this.correct_answer}</p>
            <p type="button" class="boxbrdr bg-secondary m-4 fs-3 col-4">${this.incorrect_answers}</p>
        </div>`
    }
}











// "category": "Entertainment: Video Games",
// "type": "boolean",
// "difficulty": "medium",
// "question": "Nintendo started out as a playing card manufacturer.",
// "correct_answer": "True",
// "incorrect_answers": [
//     "False"