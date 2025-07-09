import { useLocation } from "react-router-dom";
import Header from "../Header";
import BannerBackground from "../Random/home-banner-background.png";
import "./LeaderBoard.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const location = useLocation();
  const { quiz } = location.state || {};
  console.log('Quiz',quiz);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    getLeaderBoard();
  }, []);

  const getLeaderBoard = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/get-leaderboard",
        {
          quizId: quiz.quizId,
        }
      );
      if (response) {
        setLeaderboardData(response.data.leaderboard);
        console.log(response);
      }
    } catch (error) {
      console.log("Somne Erro Occured during getting leaderboard", error);
    }
  };

  return (
    <div>
      <Header />
      <h2 className="leader-h2">LeaderBoard of Quiz </h2>
      {quiz ? (
        <div>
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <table className="leader-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>User Name</th>
                <th>Score</th>
                <th>Total Time</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.userId.name}</td>
                  <td>{entry.score}</td>
                  <td>{entry.timeTaken}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No data Available</div>
      )}
    </div>
  );
};

export default LeaderBoard;
