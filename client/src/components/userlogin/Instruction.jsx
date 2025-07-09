import React, { useContext, useState } from 'react';
import './Instruction.css'

import { useLocation, useNavigate } from 'react-router-dom';
import UserQuizContext from '../CustomQuizz/context/UserQuizContext';
import Header from '../Header';

const Instruction = () => {
  const navigate = useNavigate();
  const [proceedClicked, setProceedClicked] = useState(false);
  // const {setuserQuiz} = useContext(UserQuizContext)
  const location = useLocation();
  const {detail} = location.state || {};
  const handleProceedClick = () => {
    // setuserQuiz({
    //   userId: detail.userId,
    //   // userName: detail.userName,
    //   // quiz: detail.quiz
    // })
    const newDetail = detail
    // navigate("/quiz");
    navigate('/quiz', {state: {newDetail}})
    // console.log(detail);
  };

  return (
    <div className='instructcontainer'>
      <h1>Quiz Instructions</h1>
      <p>
        Welcome to the Quiz App! Please read the following instructions carefully before starting the quiz.
      </p>

      <ul>
        <li>There will be a series of questions.</li>
        <li>Choose the correct answer for each question.</li>
        <li>There is a timer for this quiz.</li>
        <li>Click the "Proceed" button when you are ready to start the quiz.</li>
      </ul>
      <div className="quiz-detail-user">
        <div>{}</div>
      </div>
      {proceedClicked ? (
        <p>Proceed button clicked! Add your custom content or logic here.</p>
      ) : (
        <button onClick={handleProceedClick}>Proceed to Quiz</button>
      )}
    </div>
  );
};

export default Instruction;
