import React, { Component } from "react";
import styled from 'styled-components';

const servicesFontSize = 1.4;

const ServicesContainer = styled.div`
    width                : 100vw;
	height               : 100vh;
	display              : grid;
	grid-template-columns: repeat(12, calc(100%/12));
	grid-template-rows   : repeat(8, calc(100%/8));
`

const SkillsContainer = styled.div`
    position   : relative;
    grid-row   : 3 / 8;
    grid-column: 4;
    min-width  : 20em;
    font-family: quicksandlight;
    li{
        list-style-type: none;
    }
`

const SkillsContainerTitle = styled.div`
    font-size     : ${servicesFontSize + 'em'};
    padding-bottom: ${servicesFontSize + .1 + 'em'};
`
const Skill = styled.div`
    position                  : relative;
    font-size                 : ${servicesFontSize + .1 + 'em'};
    padding-bottom            : .1em;
    max-height                : ${servicesFontSize + .3 + 'em'};
    overflow                  : hidden;
    transition                : .6s;
    cursor                    : pointer;
    transition-timing-function: ease-in-out;
    &:hover{
        max-height: 13em;
    }
`

const SkillList = styled.div`
    span{
        padding-left: 1.3em;
    }
    li:before{
        margin-top : .5em;
        position   : absolute;
        margin-left: -1em;
        height     : 2px;
        width      : 9px;
        background : black;
        content    : '';
        transition : .2s;
    }
    li:hover:before{
        margin-left: .2em;
    }
`


class SkillsList extends Component {
    render(){
        return (
            <Skill>
                <h2 class="skill-name">{this.props.skillGroup}</h2>
                <SkillList>
                    {this.props.skillNames
                        .map(skillName => {
                            return <li><span> {skillName} </span></li>
                        })
                    }
                </SkillList>
            </Skill>
        )
    }
}


const TechContainer = styled.div`
    grid-row   : 3;
    grid-column: 7 / 9;
    width      : 15em;
    font-family: quicksandlight;
    font-size  : ${servicesFontSize + 'em'};
`
const TechContainerTitle = styled.div`
    font-family   : ralewayregular;
    padding-bottom: .5em;
`

const Text = styled.div`
    font-family: quicksandregular;
    font-size  : ${servicesFontSize - .55 + 'em'};
`
const More = styled.div`
    position: relative;
    span{
        padding-left: 1.5em;
    }
    &:before{
        position  : absolute;
        height    : 100%;
        width     : 1px;
        background: black;
        content   : '';
        transition: .1s;
    }
    &:hover:before{
        width: 7px;
    }
`

const skills = {
    'WEB DESIGN': ['networking', 'react/vue', 'full stack', 'site design', 'abracadabra'],
    'NETWORKING': ['dabracabra', 'lorem', 'ipsum'],
    'APP DEV': ['doler', 'motor', 'abra', 'cadabra'],
    'OTHERS': ['abra', 'cadab', 'dabra']
}


class Services extends Component{

    render(){
        console.log(`xdxd ${<br></br>} xdxd`)
        return (
            <ServicesContainer>
                <SkillsContainer>
                    <SkillsContainerTitle>Skills</SkillsContainerTitle>
                    {Object.keys(skills)
                        .map(key => {
                            return <SkillsList skillGroup={key} skillNames={skills[key]}></SkillsList>
                        })
                    }
                </SkillsContainer>
                <TechContainer>
                    <TechContainerTitle>tech and others</TechContainerTitle>
                    <Text><p>consectetur deleniti labore et reprehenderit cum quas aut non alias itaque. Omnis nam tempore impedit culpa voluptatum.	Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut nesciunt architecto atque recusandae consectetur repellat odit dolorum suscipit culpa inventore iure sint rem illum iusto, aspernatur molestias magnam vitae!</p></Text>
                    <a href="#">
                        <More><span>more</span></More>
                    </a>
                </TechContainer>
            </ServicesContainer>
            
        )
    }
}

export default Services;