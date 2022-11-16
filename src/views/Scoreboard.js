import React, { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
import { getScores } from "../modules/sheet.module";

const Scoreboard = () => {
  
  const [scores,setscores] = useState({})
  
  useEffect(()=>{
    // getScores().then(response => {
      // console.log(response)
    // })
  })

  return (
        <div>
            <h1 className="text-center">Let Me Tired</h1>
            <div className="grid grid-rows-1 mx-20 gap-4">
                <ScoreCard />
                <ScoreCard />
                <ScoreCard />
                <ScoreCard />
            </div>
        </div>
    );
};

export default Scoreboard;
