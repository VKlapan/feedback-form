import { useDispatch, useSelector } from "react-redux";
import { inputEmail, inputFeedback, inputName } from "../../redux/formSlice";
import {
  Form,
  FormTitle,
  InputField,
  SubmitButton,
} from "./FeedbackForm.styled";

const FeedbackForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const nameFromInput = useSelector((state) => state.name);
  const emailFromInput = useSelector((state) => state.email);
  const feedbackFromInput = useSelector((state) => state.feedback);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        dispatch(inputName(value));
        break;
      case "email":
        dispatch(inputEmail(value));
        break;
      case "feedback":
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
      <FormTitle>Rich out to us!</FormTitle>
      <InputField
        type="text"
        name="name"
        value={nameFromInput}
        onChange={handleChange}
        placeholder="Your name*"
      />
      <InputField
        type="email"
        name="email"
        value={emailFromInput}
        onChange={handleChange}
        placeholder="Your email*"
      />
      <InputField
        type="text"
        name="feedback"
        value={feedbackFromInput}
        onChange={handleChange}
        placeholder="Your message*"
      />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </Form>
  );
};

export default FeedbackForm;
