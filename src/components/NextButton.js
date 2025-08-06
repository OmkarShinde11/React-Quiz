function NextButton({dispatch,numOfQuestions,index}){
    if(index < numOfQuestions-1){
        return (
            <button className="btn btn-ui" onClick={()=>dispatch({type:'nextQuestion'})}>Next</button>
        )
    }
    if(index==numOfQuestions-1){
        return <button className="btn btn-ui" onClick={()=>dispatch({type:'Finish'})}>Finish</button>
    }
}
export default NextButton;