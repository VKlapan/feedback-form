import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getFeedbacks = async () => {
  const { data } = await instance.get(`/feedbacks`);
  console.log(data);
  return data;
};

export const addFeedback = async ({ name, email, feedback }) => {
  console.log("add feedback inputs params", name, email, feedback);
  const { data } = await instance.post(`/feedbacks`, { name, email, feedback });
  console.log("add feedback responce", data);
  return data;
};
