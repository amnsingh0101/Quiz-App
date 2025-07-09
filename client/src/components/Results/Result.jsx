import React, { useState, useEffect } from "react";
import "./Result.css";
import Header from "../Header";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Result = () => {
  const [quizData, setQuizData] = useState([]);
  const location = useLocation();
  const { send } = location.state || {};
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(send);
    getResult();
  }, []);

  const getResult = async () => {
    try {
      const response = await axios.post("http://localhost:8000/get-result", {
        userId: send.userId,
        quizId: send.quizId,
      });
      if (response) {
        console.log(response);
        setQuizData(response.data.quizDetails);
        console.log(quizData);
      }
    } catch (error) {
      console.log("Some Error Occured while getting result", error);
    }
  };
  if (!quizData) {
    return <div>Loading...</div>;
  }



  const getLeaderBoard = () => {
    const quiz = {quizId: send.quizId};
    navigate('/leaderboard', {state: {quiz}});
  }
  return (
    <div>
      <Header />
      <div className="Result-container">
        <h1>Quiz Result</h1>
        {/* Score:  */}
        <div className="show-quest">
          {quizData.map.length !== 0 ? (
            quizData.map((Question, index) => (
              <div className="question-sec" key={index}>
                {index + 1}. {Question.question}
                <div className="options-multiple">
                  {Question.options.map((op,jk)=>(
                    // console.log(typeof op)
                    <div key={jk}><input type="radio" disabled />{op}</div>
                  ))}
                </div>
                <div>Correct Answer: {Question.correctAnswer}</div>
                <div>Marked Answer: {Question.userSelectedOption}</div>
              </div>
            ))
          ) : (
            <div>Nothing to show</div>
          )}
        </div>
        
      </div>
      <button onClick={getLeaderBoard}>LeaderBoard</button>
    </div>
  );
};

export default Result;
