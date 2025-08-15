import { useQuiz } from "../Context/QuizContext";
import Options from "./Options";

function Question(){
    let {questions,index}=useQuiz();
    questions=questions.at(index);
    return (
        <div>
            <h4>{questions.question}</h4>
            <Options question={questions} />
        </div>
    )
}
export default Question;