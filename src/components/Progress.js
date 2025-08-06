function Progress({numOfQuestions,answer,totalPossiblePoints,index,points}){
    return (
        <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {totalPossiblePoints}
      </p>
    </header>
    )
}
export default Progress;