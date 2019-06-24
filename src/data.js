import React from "react";
import landing1 from "./assets/landing2.png";
import landing2 from "./assets/landing1.jpg";
import landing3 from "./assets/landing3.jpg";
import project1 from "./assets/project2.jpg";
import stylevars from "./stylevars";
import projectSpecialSS from "./assets/projectspecailss.JPG";

 
const projects = {
  "Electronics Based Startup1": {
    url: "GEIST_International_Foundation",
    name: "GEIST International Foundation (GIF)",
    nameHTML: ["Théâtre de la Ville", <br />, "de Paris"], //this name represents a jsx object
    img: project1,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details: 
      `( geistfoundation.org )
      Global Educators Initiative for sustainable Transformation (GEIST) is a community dedicated to education and development of children. It is a voluntary organization that has started its operation in 2016 in 10 different countries. They are continuing their operations in Bangladesh, India, Nepal, Russia, Thailand, Turkey, Ukraine & Uzbekistan.
      The organization has earned international recognition in a very short time. Notably, The US Embassy in Bangladesh is hosting a competition where students aged 13-20 demonstrate their skills and earn educational scholarships. The competition is called “English Access Microscholarship Program 2018-2020).
      S Cubed has provided them with Website Design and Development (Full Stack) and Digital Marketing Solutions and is proud to have given them our best possible service. S Cubed has developed their official website and we continue to give them the tech support they need.
      Technologies used:
      - WordPress
      `,
    highlights: 
      [
        "geistfoundation.org",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    year: "2018",
    specialImg: landing3,
    specialSS: projectSpecialSS
  },
  "SAS PLAB": {
    url: "SAS_PLAB",
    name: "SAS PLAB",
    nameHTML: ["SAS PLAB"], //this name represents a jsx object
    img: landing2,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details: 
      `The Professional and Linguistic Assessments Board test (PLAB) test, helps the board on UK to make sure doctors who qualified abroad have the right knowledge and skills to practice medicine in the UK. SAS PLAB helps medical students prepare for the test. They hold online classes, interactive sessions, previous questionnaires and mock tests for the best possible preparation for students in the comfort of their own home.
      Students have the opportunity of exclusive video calling system for the interactive class. All classes are taken by professionals from the UK. Students can also interact with each other for better preparation.
      S Cubed is honored to give thousands of individuals a proper digital platform and to get them one step closer to their dreams.`,
    highlights: 
      [
        "geistfoundation.org",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    specialImg: landing3
  },
};

export { projects };
