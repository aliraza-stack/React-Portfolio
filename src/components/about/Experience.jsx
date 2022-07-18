import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: "Data Scientist",
    compnayName: "NextonHub",
    details: `I am currently working as a Data Scientist at NextonHub. I am working on the development of a new product called "NextonHub". This product is a platform for the users to share their data with the world.`,
  },
  {
    year: "2019 - 2020",
    position: " UI/UX Designer",
    compnayName: "NextonHub",
    details: `I worked as a UI/UX Designer at NextonHub. That was a great experience. I learned a lot about the designing. I learned how to design a website.`,
  },
  {
    year: "2019 - 2020",
    position: "Back End Developer",
    compnayName: "NextonHub",
    details: `I worked as a Back End Developer at NextonHub. That was a great experience. I learned a lot about the developing. I learned how to develop a website.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
