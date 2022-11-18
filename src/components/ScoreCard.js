import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { hexToRgb } from "../modules/color.module";

const ORDER = ["st", "nd", "rd"];
const MEDAL = ["gold", "silver", "bronze"];

const ScoreCard = ({ team, score, order, color }) => {
    const [rgb, setrgb] = useState({ r: 0, g: 0, b: 0 });
    const [orderSymbol, setorderSymbol] = useState("th");
    const [medalIcon, setmedalIcon] = useState(null);

    useEffect(() => {
        if (order < 4) {
            setmedalIcon(MEDAL[order - 1]);
            setorderSymbol(ORDER[order - 1]);
        }
    }, [order]);

    useEffect(() => {
        setrgb(hexToRgb(color));
    }, [color]);

    return (
        <div>
            <div className="hidden xl:block">
                <Card
                    className="py-3 px-4 "
                    style={{
                        backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.8)`,
                    }}
                >
                    <Row>
                        <Col xl={1}>
                            <h1 className="font-mono">
                                {order}
                                <sup>{orderSymbol}</sup>
                            </h1>
                        </Col>
                        <Col xl={1}>
                            {medalIcon && (
                                <img
                                    className="mt-1"
                                    width={50}
                                    src={require(`../imgs/${medalIcon}-medal.svg`)}
                                    alt=""
                                />
                            )}
                        </Col>
                        <Col xl={9}>
                            <h1>{team}</h1>
                        </Col>
                        <Col xl={1}>
                            <h1 className="xl:text-right">{score}</h1>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div className="xl:hidden">
                <Card
                    className="py-3 px-4 "
                    style={{
                        backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.8)`,
                    }}
                >
                    <h1 className="font-mono text-center">
                        {order}
                        <sup>{orderSymbol}</sup>
                    </h1>
                    {medalIcon && (
                        <img
                            className="mt-1 mx-auto"
                            width={50}
                            src={require(`../imgs/${medalIcon}-medal.svg`)}
                            alt=""
                        />
                    )}
                    <h1 className="text-center">{team}</h1>
                    <h1 className="text-center">{score}</h1>
                    {/* <Row>
                    <Col xl={1}>
                        <h1 className="font-mono">
                            {order}
                            <sup>{orderSymbol}</sup>
                        </h1>
                    </Col>
                    <Col xl={1}>
                        {medalIcon && (
                            <img
                                className="mt-1"
                                width={50}
                                src={require(`../imgs/${medalIcon}-medal.svg`)}
                                alt=""
                            />
                        )}
                    </Col>
                    <Col xl={9}>
                        <h1>{team}</h1>
                    </Col>
                    <Col xl={1}>
                        <h1 className="xl:text-right">{score}</h1>
                    </Col>
                </Row> */}
                </Card>
            </div>
        </div>
    );
};

export default ScoreCard;
