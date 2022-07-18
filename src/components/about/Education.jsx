import React from "react";

const educationContent = [
  {
    year: "2018 - Present",
    degree: "ENGINEERING DEGREE",
    institute: "COMSATS UNIVERSITY SAHIWAL CAMPUS",
    details: `I am currently pursuing my Bachelor of Engineering degree in Computer Science and Engineering from the Comsats University, Sahiwal.`,
  },
  {
    year: "2015 - 2018",
    degree: "Intermediate",
    institute: "NISHAT COLLEGE OF SCIENCE AND TECHNOLOGY",
    details: `I completed my Intermediate degree in Science from the Nishat College of Science and Technology, Multan.`,
  },
  {
    year: "2013 - 2015",
    degree: "MATRICULATE",
    institute: "QUASIM PUBLIC SCHOOL",
    details: `I completed my Matriculate in Computer Science from the Quasim Public School, Iqbal Nagar.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
