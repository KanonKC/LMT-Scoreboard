import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";

const ORDER = ['st','nd','rd']
const MEDAL = ['gold','silver','bronze']

const ScoreCard = ({ team,score,order,color }) => {

    const [orderSymbol,setorderSymbol] = useState("th")
    const [medalIcon,setmedalIcon] = useState(null)

    useEffect(()=>{
        if(order < 4){
            setmedalIcon(MEDAL[order-1])
            setorderSymbol(ORDER[order-1])
        }
    },[order])

    return (
        <Card className="py-3 px-4" style={{
            backgroundColor: color
        }}>
            <Row>
                <Col xl={1}>
                    <h1 className="font-mono">{order}<sup>{orderSymbol}</sup></h1>
                </Col>
                <Col xl={1}>
                    {medalIcon && <img className="mt-1" width={50} src={require(`../imgs/${medalIcon}-medal.svg`)} alt=""/>}
                </Col>
                <Col xl={9}>
                    <h1>{team}</h1>
                </Col>
                <Col xl={1}>
                    <h1 className="text-right">{score}</h1>
                </Col>
            </Row>
        </Card>
    );
};

export default ScoreCard;
