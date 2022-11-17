import axios from "axios";
import { BACKEND_URL } from "./constant.service";

export function getScores(){
    return axios.get(`${BACKEND_URL}/api/scores`)
}