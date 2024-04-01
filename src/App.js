// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setisOpen] = useState(true);

//   function handlePrevious() {
//     step > 1 && setStep((s) => s - 1);
//   }

//   function handleNext() {
//     step < 3 && setStep((s) => s + 1);
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setisOpen((s) => !s)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step} : {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "purple", color: "white" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "purple", color: "white" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // function App() {
// //   const [step, setStep] = useState(1);
// //   const [open, setOpen] = useState(true);

// //   function handlePrevious() {
// //     step > 1 && setStep((s) => s - 1);
// //   }

// //   function handleNext() {
// //     step < 3 && setStep((s) => s + 1);
// //   }

// //   function handleWindowOpen() {
// //     setOpen((s) => !s);
// //   }

// //   return (
// //     <>
// //       <button className="close" onClick={handleWindowOpen}>
// //         {open ? "Close" : "Open"}
// //       </button>
// //       {open && (
// //         <div className="steps">
// //           <div className="numbers">
// //             <div className={step >= 1 ? "active" : ""}>1</div>
// //             <div className={step >= 2 ? "active" : ""}>2</div>
// //             <div className={step >= 3 ? "active" : ""}>3</div>
// //           </div>

// //           <p className="message">
// //             Step : {step} {messages[step - 1]}
// //           </p>

// //           <div className="buttons">
// //             <button
// //               style={{ backgroundColor: "purple", color: "white" }}
// //               onClick={handlePrevious}
// //             >
// //               Previous
// //             </button>
// //             <button
// //               style={{ backgroundColor: "purple", color: "white" }}
// //               onClick={handleNext}
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// export default App;
