import React from "react";
import { Card, Col, Row } from "reactstrap";

const ScoreCard = ({ ...args }) => {
    return (
        <Card className="py-3 px-4">
            <Row>
                <Col>
                    <h1>{args.team}</h1>
                </Col>
                <Col>
                    <h1 className="text-right">{args.score}</h1>
                </Col>
            </Row>
        </Card>
    );
};

export default ScoreCard;
