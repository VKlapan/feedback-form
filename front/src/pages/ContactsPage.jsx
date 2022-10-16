import { useDispatch } from "react-redux";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import Footer from "../components/Footer/Footer";
import { addFeedback } from "../services/feedbacksApi";
import { inputEmail, inputFeedback, inputName } from "../redux/formSlice";
import { Notify } from "notiflix";
import {
  ContactsContainer,
  ContactsBlock,
  ContactsHeader,
} from "./ContactsPage.styled";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (feedbackFromForm) => {
    const data = addFeedback(feedbackFromForm);
    data
      .then((data) => {
        console.log(data);
        dispatch(inputName(""));
        dispatch(inputEmail(""));
        dispatch(inputFeedback(""));
        Notify.success("THANK YOU!");
      })
      //      .catch((error) => console.log(error));
      .catch((error) => Notify.failure(error));
  };

  return (
    <>
      <ContactsContainer>
        <ContactsBlock>
          <ContactsHeader />
          <FeedbackForm onSubmit={onSubmit} />
        </ContactsBlock>
      </ContactsContainer>
      <Footer />
    </>
  );
};

export default ContactsPage;
