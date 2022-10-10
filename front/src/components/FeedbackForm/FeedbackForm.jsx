import { useDispatch, useSelector } from "react-redux";
import { inputEmail, inputFeedback, inputName } from "../../redux/formSlice";
import { Form, InputLabel, SubmitButton } from "./FeedbackForm.styled";

const FeedbackForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const nameFromInput = useSelector((state) => state.name);
  const emailFromInput = useSelector((state) => state.email);
  const feedbackFromInput = useSelector((state) => state.feedback);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        console.log(name);
        dispatch(inputName(value));
        break;
      case "email":
        console.log(name);
        dispatch(inputEmail(value));
        break;
      case "feedback":
        console.log(name);
        dispatch(inputFeedback(value));
        break;
      default:
        console.log("incorrect input name");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name: nameFromInput,
      email: emailFromInput,
      feedback: feedbackFromInput,
    });
    dispatch(inputName(""));
    dispatch(inputEmail(""));
    dispatch(inputFeedback(""));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputLabel>
        Name
        <input
          type="text"
          name="name"
          value={nameFromInput}
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        EMail
        <input
          type="email"
          name="email"
          value={emailFromInput}
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Feedback
        <input
          type="text"
          name="feedback"
          value={feedbackFromInput}
          onChange={handleChange}
        />
      </InputLabel>
      <SubmitButton type="submit">Send Feedback</SubmitButton>
    </Form>
  );
};

export default FeedbackForm;
