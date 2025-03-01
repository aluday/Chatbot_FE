import axios from "axios"
import {ENDPOINT_URL} from "../common/constant"

const BASE_URL = "http://localhost:5001/api"


export const createChatSession = async () => {
  const url = BASE_URL + ENDPOINT_URL.CREATE_SESSION;
  const res = await axios.post(url);
  return res;
}

export const sendAnswer = async(data) => {
  const url = BASE_URL + ENDPOINT_URL.SEND_ANSWER;
    const res = await axios.post(url, data);
    return res
}


export const getConversationList = async(data) => {
  const url = BASE_URL + ENDPOINT_URL.CONVERSATION_LIST;
    const res = await axios.get(`${url}/${data}`);
    return res.data
}