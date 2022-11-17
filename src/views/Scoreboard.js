import React, { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
import { getScores } from "../services/score.service";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Col, Row } from "reactstrap";

const Scoreboard = () => {
    const [scores, setscores] = useState([]);
    const [key, setKey] = useState(0);

    const handleComplete = (prevKey) => {
        setKey((prevKey) => prevKey + 1);
        getScores().then((response) => {
          setscores(response.data.result);
        });
    };

    useEffect(() => {
        getScores().then((response) => {
            setscores(response.data.result);
        });
    }, []);

    return (
        <div>
            <h1 className="text-center my-10 text-6xl">SCOREBOARD </h1>

            <div className="my-10 countdown-timer d-none">
                <CountdownCircleTimer
                    isPlaying
                    size={50}
                    duration={10}
                    colors={["#004777"]}
                    colorsTime={[10]}
                    key={key}
                    onComplete={(prevKey) => handleComplete(prevKey)}
                />
            </div>

            <div className="grid grid-rows-1 card-list gap-4">
                {scores.map((item, index) => (
                    <ScoreCard
                        key={index}
                        order={index + 1}
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
