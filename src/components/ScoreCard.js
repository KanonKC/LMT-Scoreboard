import React from "react";
import { Card, Col, Row } from "reactstrap";

const ScoreCard = ({ team,score,order,color }) => {
    return (
        <Card className="py-3 px-4" style={{
            backgroundColor: color
        }}>
            <Row>
                <Col>
                    <h1 >{order}. {team}</h1>
                </Col>
                <Col>
                    <h1 className="text-right">{score}</h1>
                </Col>
            </Row>
        </Card>
    );
};

export default ScoreCard;
