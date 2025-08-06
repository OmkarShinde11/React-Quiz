function FinishScreen({points,totalPossiblePoints,dispatch}){
    const percentage=Math.ceil((points/totalPossiblePoints)*100);
    return (
        <>
        <p className="result">
            You Scored <strong>{points}</strong>out of {totalPossiblePoints} ({percentage}%)
        </p>
              <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "restart" })}
            >
              Restart quiz
            </button>
        </>
    )
}
export default FinishScreen;