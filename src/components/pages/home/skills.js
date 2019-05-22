import React, { Component } from "react";
import styled from 'styled-components';


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
`

const SkillsContainerTitle = styled.div`
    font-size     : 1.4em;
    padding-bottom: 1.5em;
`
const Skill = styled.div`
    position                  : relative;
    font-size                 : 1.5em;
    padding-bottom            : .1em;
    max-height                : 1.7em;
    overflow                  : hidden;
    transition                : .6s;
    cursor                    : pointer;
    transition-timing-function: ease-in-out;
    &:hover{
        max-height: 13em; //compute this value
    }
`

const SkillList = styled.div`
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


class Skill extends component {
    render(){
        return (
            <Skill>
                <h2 class="skill-name">WEB DESIGN</h2>
                <SkillList>
                    { 
                        this.props.forEach(skillName){
                            return <li>&nbsp &nbsp {skillName}</li>
                        } 
                    }
                </SkillList>
            </Skill>
        )
    }
}

const skills = {

}


class Services extends component{
    render(){
        <ServicesContainer>
            <SkillsContainer>
                <SkillsContainerTitle></SkillsContainerTitle>
                
            </SkillsContainer>
        </ServicesContainer>
    }
}