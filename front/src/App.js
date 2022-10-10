import "./App.css";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  const onSubmit = (feedback) => {
    console.log(feedback);
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
