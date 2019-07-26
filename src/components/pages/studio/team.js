import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const TeamContainer = styled.div`
  padding: 7rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 1.2em;
    padding: 2rem 1rem;
    width: 50rem;
    align-self: center;
    font-family: monospace;
  }
  .team-members {
    width: 50rem;
    align-self: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const TeamMember = styled.div`
  font-size: 1rem;
  width: 25rem;
  padding-bottom: 3rem;
  font-family: quicksandmedium;
  .name {
    font-family: quicksandmedium;
    font-size: 2rem;
  }
`;
class TeamMemberClass extends Component {
  render() {
    return (
      <TeamMember>
        <div class="name">{this.props.name}</div>
        <div class="designation">{this.props.designation}</div>
      </TeamMember>
    );
  }
}

const teamMembers = {
  "Sakib Sadman Shajib": {
    designation: "Founder"
  },
  "Md Zillur Rahman": {
    designation: "Co founder"
  },
  "Zawad Alam Zarif": {
    designation: "Co founder"
  },
  "Nahian Al Sabri": {
    designation: "Backend developer"
  },
  "Kashshaf Ahsan Rushad": {
    designation: "Video editor"
  },
  "Nuzat Nawal Chowdhury": {
    designation: "Marketing and PR executive"
  },
  "Al-Mubin Khan Nabil": {
    designation: "IoT researcher"
  },
  "Amit Das": {
    designation: "Consultant"
  },
};

class Team extends Component {
  render() {
    return (
      <TeamContainer className="team">
<<<<<<< HEAD
        <div className="title">Core team</div>
        <div className="team-members">
=======
        <div class="title">Core team</div>
        <div class="team-members">
>>>>>>> 30b501cf89863779e4389bcdc7312badc122ede6
          {Object.keys(teamMembers).map(name => {
            return (
              <TeamMemberClass
                name={name}
                designation={teamMembers[name].designation}
              />
            );
          })}
        </div>
      </TeamContainer>
    );
  }
}

export default Team;