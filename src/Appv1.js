import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handlePrevious() {
    step > 1 && setStep((s) => s - 1);
  }

  function handleNext() {
    step < 3 && setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step : {step} {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              backgroundColor={"purple"}
              color={"white"}
              onClick={handlePrevious}
            >
              Previous
            </Button>

            <Button
              backgroundColor={"purple"}
              color={"white"}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ children, backgroundColor, color, onClick }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
