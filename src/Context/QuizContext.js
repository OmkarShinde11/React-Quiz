import { createContext, useContext, useReducer,useEffect } from "react";

const QuizContext=createContext();
const initialState={questions:[],status:'loading',index:0,answer:null,points:0,secondsRemainign:null};
const SecondPerQuestion=30;
function reducer(state,action){
  switch(action.type){
    case 'getQuestions':
      return {...state,questions:action.payload,status:'ready',secondsRemainign:state.questions.length * SecondPerQuestion};
    case 'handleError':
      return {...state,questions:[],status:'error'};
    case 'startQuiz':
      return {...state,status:'active'};
    case 'setAnswer':
      return {...state,
        answer:action.payload.answer,
        points:state.points+action.payload.points,
      };
    case 'nextQuestion':
      return {
        ...state,index:state.index+1,answer:null
      }
    case 'Finish':
      return {
        ...state,status:'Finish',
      }
    case 'restart':
      return {
        ...initialState,questions:state.questions,status:'ready',secondsRemainign: state.questions.length * SecondPerQuestion,
      }
    case 'timerStart':
      return {
        ...state,secondsRemainign:state.secondsRemainign-1,status:state.secondsRemainign===0 ? 'Finish':state.status,
      }
    default:
        throw new Error('No Such action type exist')
  }
}

function QuizProvider({children}){
    const [state,dispatch]=useReducer(reducer,initialState);
    const {questions,status,index,answer,points,secondsRemainign}=state;
    useEffect(()=>{
        fetchQuestions();
    },[]);

    const numOfQuestions=questions.length;
    const totalPossiblePoints=questions.reduce((acc,curr)=>acc+curr.points,0);
        async function fetchQuestions(){
        try{
          const res=await fetch(`http://localhost:9000/questions`);
          const questions=await res.json();
          console.log(questions);
          dispatch({type:'getQuestions',payload:questions});
        }catch(err){
          console.log(err);
          dispatch({type:'handleError'})
        }
    }
    return <QuizContext.Provider value={{
        questions,status,index,answer,points,secondsRemainign,numOfQuestions,totalPossiblePoints,dispatch
    }}>{children}</QuizContext.Provider>
};

function useQuiz(){
    const context=useContext(QuizContext);
    return context;
}

export { useQuiz,QuizProvider};