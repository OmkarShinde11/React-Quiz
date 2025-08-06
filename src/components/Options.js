function Options({question,dispatch,answer}){
    const hasAnswered = answer !== null;
    function handleSubmission(index){
        const passPoints=index===question.correctOption ? true:false;
        dispatch({type:'setAnswer',payload:{answer:index,points:passPoints ? question.points : 0}});
    }
    return (
        <div className="options">
            {question.options.map((option,index)=>(
                <button className={`btn btn-option ${index===answer ? 'answer':''} ${hasAnswered ? question.correctOption===index ? 'correct':'wrong':""} `} key={option} onClick={()=>handleSubmission(index)} disabled={answer}>{option}</button>
            ))}
        </div>
    )
};
export default Options;