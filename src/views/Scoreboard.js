import React, { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
import { getScores } from "../services/score.service";

const Scoreboard = () => {
    const [scores, setscores] = useState([]);

    useEffect(() => {
        setInterval(()=>{
        getScores().then((response) => {
            setscores(response.data.result);
        });
        },1100)
    }, []);

    return (
        <div>
            <h1 className="text-center my-10 text-6xl">SCOREBOARD</h1>
            <div className="grid grid-rows-1 card-list gap-4">
                {scores.map((item, index) => (
                    <ScoreCard
                        key={index}
                        order={index+1}
                        team={item.team}
                        score={item.score}
                        color={item.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default Scoreboard;
