import React, { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
import { getScores } from "../services/score.service";

const Scoreboard = () => {
  
  const [scores,setscores] = useState([])
  
  useEffect(()=>{
    setInterval(()=>{
      getScores().then(response => {
        setscores(response.data.result)
      })
    },1000)
  },[])

  return (
        <div>
            <h1 className="text-center">Let Me Tired</h1>
            <div className="grid grid-rows-1 mx-20 gap-4">
                {scores.map(score => <ScoreCard {...score}/>)}
            </div>
        </div>
    );
};

export default Scoreboard;
