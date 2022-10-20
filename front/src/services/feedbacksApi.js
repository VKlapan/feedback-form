import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export const getFeedbacks = async () => {
  const { data } = await instance.get(`/feedbacks`);
  return data;
};

export const addFeedback = async ({ name, email, feedback }) => {
  try {
    const { data } = await instance.post(`/feedbacks`, {
      name,
      email,
      feedback,
    });
    return Promise.resolve(data);
  } catch (error) {
    const errorMessage = error.response.data.message;
    return Promise.reject(errorMessage.toUpperCase());
  }
};
