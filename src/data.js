"use strict"

import React from "react";
import simple from "./assets/1 simple.jpg";
import secure from "./assets/2 secure.jpg";
import server from "./assets/5 server.jpg";
import bulb from "./assets/6 bulb idea.jpg";
import stylevars from "./stylevars";


const projects = {
  "GIEST": {
    url: "GEIST_International_Foundation",
    name: "GEIST International Foundation (GIF)",
    nameHTML: ["GEIST International Foundation", <br />, "(GIF)"], //this name represents a jsx object
    img: bulb,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Global Educators Initiative for sustainable Transformation (GEIST) is a community dedicated to education and development of children. It is a voluntary organization that has started its operation in 2016 in 10 different countries. They are continuing their operations in Bangladesh, India, Nepal, Russia, Thailand, Turkey, Ukraine & Uzbekistan.
      The organization has earned international recognition in a very short time. Notably, The US Embassy in Bangladesh is hosting a competition where students aged 13-20 demonstrate their skills and earn educational scholarships. The competition is called “English Access Microscholarship Program 2018-2020).
      S Cubed has provided them with Website Design and Development (Full Stack) and Digital Marketing Solutions and is proud to have given them our best possible service. S Cubed has developed their official website and we continue to give them the tech support they need.
      Technologies used:
      - WordPress
      `,
    highlights:
      [
        "http://geistfoundation.org/",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    year: "2018",
    specialImg: server,
  },
  "SAS PLAB": {
    url: "SAS_PLAB",
    name: "SAS PLAB",
    nameHTML: ["SAS PLAB"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `( sasplab.com)
      The Professional and Linguistic Assessments Board test (PLAB) test, helps the board on UK to make sure doctors who qualified abroad have the right knowledge and skills to practice medicine in the UK. SAS PLAB helps medical students prepare for the test. They hold online classes, interactive sessions, previous questionnaires and mock tests for the best possible preparation for students in the comfort of their own home.
      Students have the opportunity of exclusive video calling system for the interactive class. All classes are taken by professionals from the UK. Students can also interact with each other for better preparation.
      S Cubed is honored to give thousands of individuals a proper digital platform and to get them one step closer to their dreams.
      
      
      
      Technologies used:
      -WordPress
      `,
    highlights:
      [
        "https://www.sasplab.com/",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    specialImg: server
  },
  "JUMUNA": {
    url: "JUMUNA",
    name: "JUMUNA",
    nameHTML: ["JUMUNA"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Jahangirnagar University Model United Nations Association (JUMUNA) was formed in 6th February, 2015. JUMUNA aims to help students gain knowledge beyond the boundaries of their educational institution. Students learn about current political problems and look for solutions to them. JUMUNA's work meets the standards of  that of organizations worldwide.
      Students understand different cultures and nations, put their problem solving abilities to the test, negotiate drafts and create resolutions.
      S Cubed technologies is proud to give JUMUNA a digital appearance.
            `,
    highlights:
      [
        "https://jumuna.com/",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    specialImg: server
  },
  "SFOSSIL": {
    url: "SFOSSIL",
    name: "SFOSSIL",
    nameHTML: ["SFOSSIL"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `sFossil is a Global Organic Textile Standard certified fabric and garment manufacturer based in Turkey.
      They specialize in manufacturing organic knitted and woven fabrics and garments. In addition to the full line of basic organics, they also offer versatile solid, dyed and printed fabric. sFossil provides Eco friendly garment solutions and takes a step forward for a cleaner, safer world.
       `,
    highlights:
      [
        "https://www.sfossil.com/",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    specialImg: server
  },
  "INTUITIONINT": {
    url: "INTUITIONINT",
    name: "INTUITIONINT",
    nameHTML: ["INTUITIONINT"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Intuition interactive is an interactive education website designed for students. Students can learn using videos, interactive exercises, and in-depth articles in math, science, English language and grammar, economics, humanities and more.
      Students can watch pre recorded videos of detailed classes conducted by experts. However, interactive personalized classes are the key feature they provide.
      `,
    highlights:
      [
        "https://intuitionint.com/",
        "WordPress Website Design & Development",
        "Digital Marketing"
      ],
    specialImg: server
  },
  "ZPACK": {
    url: "ZPACK",
    name: "ZPACK",
    nameHTML: ["ZPACK"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Zpack produces woven reusable bags. They specialize in cotton bags, tissue bags and paper bags.
      S Cubed has built a customized website for them according to their needs. The website includes product life cycle management, accounts management, inventory management, order and clients' list etc. S Cubed has automated their production system with this website.
      `,
    highlights:
      [
        "https://soft.zpackltd.com/",
        "Custom ERP webapp"
      ],
    specialImg: server
  },
  
  "TECHINHEIM": {
    url: "TECHINHEIM",
    name: "TECHINHEIM",
    nameHTML: ["TECHINHEIM"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Techinheim a website designed to monetize video game streaming services. They create branded content for advertising products and services.
      Techinheim also organizes gaming events for video game enthusiasts.
      They have also created a digital wallet which is an online service that allows an individual to make electronic transactions.
      `,
    highlights:
      [
        "https://techinheim.com/",
        "WordPress Website Design & Development",
        "Digital Marketing",
        "Platform Development"
      ],
    specialImg: server
  },
  "ABSTRACTPODIUM": {
    url: "ABSTRACTPODIUM",
    name: "ABSTRACTPPODIUM",
    nameHTML: ["ABSTRACT PODIUM"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Abstract podium is an online platform which connects artists to art enthusiasts. Artists can upload their artwork to the site and the artwork can be viewed by people visiting the website.
      Abstract podium is also amazing online marketplace for digital art. Interested buyers can purchase the artwork and support the artist. 
      `,
    highlights:
      [
        "https://abstractpodium.com/",
        "Custom Webapp & App"
      ],
    specialImg: server
  },
  "CERL": {
    url: "CERL",
    name: "CERL",
    nameHTML: ["CERL"], //this name represents a jsx object
    img: server,
    specialText:
      "The menu highlights different types of shows to allow a direct access to dedicated content.",
    details:
      `Center for education research and learning (CERL) is an after school education program. Students get access to interactive learning sessions conducted by experts.
      CERL is also known for organizing the best English Olympiad in Bangladesh recognized by WOC.
      They also offer courses on photography, field work training, bird watching, nature and wildlife photography, botany and butterfly identification, nature field work and research by nature study society of Bangladesh.
      `,
    highlights:
      [
        "https://cerl.com.bd/",
        "WordPress Website Design & Development"
      ],
    specialImg: server
  }
};

export { projects };
