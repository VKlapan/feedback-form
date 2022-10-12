import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import Footer from "../components/Footer/Footer";
import { addFeedback } from "../services/feedbacksApi";

import {
  ContactsContainer,
  ContactsBlock,
  ContactsHeader,
} from "./ContactsPage.styled";

const ContactsPage = () => {
  const onSubmit = (feedbackFromForm) => {
    const { name, email, feedback } = feedbackFromForm;

    if (name === "" || email === "" || feedback === "")
      return alert("You need fill all fields!");
    addFeedback(feedbackFromForm);
    console.log(feedbackFromForm);
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
