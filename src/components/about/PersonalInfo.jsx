import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Muhammad Ali" },
  { meta: "last name", metaInfo: "Raza" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Rai Ahmad Nawaz Town, Chichawatni, Pakistan" },
  { meta: "phone", metaInfo: "+923000750714" },
  { meta: "Email", metaInfo: "aliraxayasin@gmail.com" },
  { meta: "Instagram", metaInfo: " ali_r_axa" },
  { meta: "langages", metaInfo: "Urdu, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
