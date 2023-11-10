
  import React, { useState } from "react";
  
  function Survey() {
  const [responses, setResponses] = useState({
  question1: null,
  question2: null,
  question3: null,
  question4: null,
  question5: null,
  question6: null,
  question7: null,
  question8: null,
  question9: null,
  });
  
  const questions = [
  {
  question: "Which of these subjects do you enjoy the most in school?",
  options: [
  "Physics (Engineering)",
  "Business Studies (Business Analysis)",
  "Biology (Medicine)",
  "Visual Arts (Art)",
  "Social Studies (Social Sciences)",
  "Literature (Humanities)",
  "ICT or Elective IT (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "Which of these skills do you think you excel at?",
  options: [
  "Problem-solving (Engineering)",
  "Strategic thinking (Business Analysis)",
  "Empathy and understanding (Medicine)",
  "Creativity and imagination (Art)",
  "Critical thinking (Social Sciences)",
  "Communication and expression (Humanities)",
  "Technical skills (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "What kind of work environment do you prefer?",
  options: [
  "Structured and predictable (Engineering)",
  "Corporate and strategic (Business Analysis)",
  "Helping and healing (Medicine)",
  "Creative and free-form (Art)",
  "Research-oriented (Social Sciences)",
  "Collaborative and expressive (Humanities)",
  "Tech-oriented and innovative (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "If you could have a superpower, which one would it be?",
  options: [
  "Ability to build and fix anything (Engineering)",
  "Ability to heal others (Medicine)",
  "Ability to create things out of thin air (Art)",
  "Ability to understand how societies work (Social Sciences)",
  "Ability to express any thought or idea perfectly (Humanities)",
  "Ability to communicate with machines (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question:
  "If you could spend a day with a famous person, who would it be?",
  options: [
  "Elon Musk (Engineering)",
  "Florence Nightingale (Medicine)",
  "Picasso (Art)",
  "Nelson Mandela (Social Sciences)",
  "Shakespeare (Humanities)",
  "Bill Gates (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "If you could change one thing in the world, what would it be?",
  options: [
  "Build more sustainable cities (Engineering)",
  "Improve healthcare for everyone (Medicine)",
  "Promote art and creativity (Art)",
  "Achieve social justice (Social Sciences)",
  "Improve education and literacy (Humanities)",
  "Increase access to technology (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "What type of TV shows or movies do you enjoy?",
  options: [
  "Science fiction or documentaries (Engineering)",
  "Medical dramas or documentaries (Medicine)",
  "Art films or creative shows (Art)",
  "Historical dramas or social documentaries (Social Sciences)",
  "Classic films or philosophical shows (Humanities)",
  "Tech-related shows or documentaries (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "If you could start your own business, what would it be?",
  options: [
  "A tech startup (Engineering)",
  "A healthcare clinic (Medicine)",
  "An art studio (Art)",
  "A non-profit organization (Social Sciences)",
  "A publishing house (Humanities)",
  "A software company (Information Technology)",
  "Not Sure",
  ],
  },
  {
  question: "What type of problems do you enjoy solving?",
  options: [
  "Technical or logical problems (Engineering)",
  "Health-related or care-giving problems (Medicine)",
  "Creative or aesthetic problems (Art)",
  "Social or community problems (Social Sciences)",
  "Philosophical or ethical problems (Humanities)",
  "Computer or tech problems (Information Technology)",
  "Not Sure",
  ],
  },
  ];
  
  const handleResponse = (questionIndex, responseIndex) => {
  setResponses({
  ...responses,
  [`question${questionIndex}`]: responseIndex,
  });
  };
  
  const submitSurvey = () => {
  const surveyResponse = {
  answerQuestion1: responses.question1,
  answerQuestion2: responses.question2,
  answerQuestion3: responses.question3,
  answerQuestion4: responses.question4,
  answerQuestion5: responses.question5,
  answerQuestion6: responses.question6,
  answerQuestion7: responses.question7,
  answerQuestion8: responses.question8,
  answerQuestion9: responses.question9,
  };
  
  // Send the POST request to the server
  fetch("http://localhost:8080/processSurvey", {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify(surveyResponse),
  })
  .then((response) => {
  if (response.ok) {
  return response.text(); // If the response is text, use response.text() instead of response.json()
  } else {
  throw new Error(
  `Failed to submit survey. Status: ${response.status}`
  );
  }
  })
  .then((data) => {
  console.log("Server response:", data);
  })
  .catch((error) => {
  console.error(error);
  });
  };
  
  
  return (
  <div>
  <h1>Survey</h1>
  <form>
  {questions.map((question, index) => (
  <div key={index}>
  <p>{question.question}</p>
  {question.options.map((option, optionIndex) => (
  <div key={optionIndex}>
  <input
  type="radio"
  name={`question${index}`}
  value={optionIndex}
  checked={responses[`question${index}`] === optionIndex}
  onChange={() => handleResponse(index, optionIndex)}
  />
  <label>{option}</label>
  </div>
  ))}
  </div>
  ))}
  </form>
  <button onClick={submitSurvey}>Submit Survey</button>
  </div>
  );
  }
  
  export default Survey;
 