import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";

const ORDER = ['st','nd','rd','th']

const ScoreCard = ({ team,score,order,color }) => {

    const [orderSymbol,setorderSymbol] = useState("th")

    useEffect(()=>{
        if(order <= 4){
            setorderSymbol(ORDER[order-1])
        }
    },[order])

    return (
        <Card className="py-3 px-4" style={{
            backgroundColor: color
        }}>
            <Row>
                <Col xs={1}>
                    <h1 className="font-mono">{order}<sup>{orderSymbol}</sup></h1>
                </Col>
                <Col>
                    <h1>{team}</h1>
                </Col>
                <Col>
                    <h1 className="text-right">{score}</h1>
                </Col>
            </Row>
        </Card>
    );
};

export default ScoreCard;
