import { useEffect } from "react";
import { useQuiz } from "../Context/QuizContext";

function Timer(){
    const {secondsRemainign,dispatch}=useQuiz();
    let min=Math.floor(secondsRemainign/60);
    let seconds=secondsRemainign % 60;
    useEffect(()=>{
        const id=setInterval(()=>{
            dispatch({type:'timerStart'})
        },1000);

        return function(){clearInterval(id)};
    },[dispatch]);
    return (
        <div className="timer">{min < 10 ? "0"+min:min}:{seconds <10 ? "0" +seconds:seconds}</div>
    )
}
export default Timer;