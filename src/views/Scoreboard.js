import React, { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
import { getScores } from "../services/score.service";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import LoadingSpinner from "../components/LoadingSpinner";

const Scoreboard = () => {
    const [scores, setscores] = useState([]);
    const [key, setKey] = useState(0);
    const [isLoading, setisLoading] = useState(true)

    const handleComplete = (prevKey) => {
        setKey((prevKey) => prevKey + 1);
        getScores().then((response) => {
            setscores(response.data.result);
        });
    };

    useEffect(() => {
        getScores().then((response) => {
            setisLoading(false)
            setscores(response.data.result);
        });
    }, []);

    return (
        <div>
            <h1 className="text-center text-white mt-20 mb-10 lg:text-6xl text-5xl scoreboard-title">SCOREBOARD </h1>

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

            {isLoading ? <LoadingSpinner/> : <div className="card-list pr-3">
                {scores.map((item, index) => (
                    <ScoreCard
                        customClass={'mb-3'}
                        key={index}
                        order={index + 1}
                        team={item.team}
                        score={item.score}
                        color={item.color}
                    />
                ))}
            </div>}
        </div>
    );
};

export default Scoreboard;
