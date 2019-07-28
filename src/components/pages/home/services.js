import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    font-family: ralewayregular;
    li{
        list-style-type: none;
    }
`

const SkillsContainerTitle = styled.div`
    font-size     : ${servicesFontSize + 'em'};
    padding-bottom: ${servicesFontSize + .1 + 'em'};
`
const Skill = styled.div`
    h2{
        font-family: rzregular;
        font-weight: 100;
    }
    position                  : relative;
    font-size                 : ${servicesFontSize + .1 + 'em'};
    padding-bottom            : .1em;
    max-height                : ${servicesFontSize + .3 + 'em'};
    overflow                  : hidden;
    transition                : .6s;
    transition-delay          : .1s;
    cursor                    : pointer;
    transition-timing-function: ease-in-out;
    &:hover{
        max-height: 13em;
    }
`

const SkillList = styled.div`
    li{
        padding-left: 1.3em;
        span{
            font-family: rzregular;
            font-weight: 100;
        }
    }
    li:before{
        margin-top : .5em;
        position   : absolute;
        margin-left: -5em;
        height     : 2px;
        width      : 9px;
        background : black;
        content    : '';
        transition : .2s;
    }
    li:hover:before{
        margin-left: -1em;
    }
`


class SkillsList extends Component {
    render(){
        return (
            <Skill className="skill">
                <h2 class="skill-name">{this.props.skillGroup}</h2>
                <SkillList>
                    {this.props.skillNames
                        .map(skillName => {
                            return <Link to={`Skill/${skillName}`}><li><span> {skillName} </span></li></Link>
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

// const skills = {
//     'WEB': ['E-commerce solutions', 'Content management solutions', 'Web hosting', 'Web designing', 'Consultancy & services'],
//     'SOFTWARE': ['Enterprise Resource Planning (ERP) software', 'Accounting and Invoicing software', 'Customer relationship management (CRM) software', 'Project management software'],
//     'TECH SUPPORT': ['Digital marketing solutions', 'PC installation and support', 'IT feasibility studies', 'Computing Network Design', 'Server Management Support'],
//     'OPTIMIZATIONS': ['Search Engine Optimization', 'Social Media Optimization'],
//     'PC INTEGRATION': ['Custom PC integration', 'Premium support and consultancy '],
//     'CREATIVE DIGITAL LAB': ['Digital brand identity creation', 'Graphics design']
// }

const skills = {
    "Technology": ['Web Development', 'Software Development', 'Technical Support', 'Technical Consultant'],
    "Marketing": ['SEO', 'Social Media', 'Content Development', 'Digital Art'],
    "Brand Identity": ['Logo Design', 'Business card design'],
}


class Services extends Component{
    componentDidUpdate(){
        if(this.props.sr){
            // console.log("skill before update");
            // console.log(this.props.sr.store)
            // this.props.sr.reveal(document.querySelectorAll('.tech-container *'), {
            //     //distance: '450px',
            //     interval: 40,
            //     delay: 100
            // });
            // this.props.sr.reveal('.skill',{
            //     interval: 40,
            // })
            // console.log("skill after update")
            // console.log(this.props.sr.store)
        }
    }
    componentWillUnmount(){
        // console.log("skill before clean")
        // console.log(this.props.sr.store)
        // this.props.sr.clean('.skill');
        // this.props.sr.clean(document.querySelectorAll('.tech-container *'))
        // console.log("skill after clean")
        // console.log(this.props.sr.store)
    }
    render(){
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
                <TechContainer className="tech-container">
                    <TechContainerTitle>Our Vision</TechContainerTitle>
                    <Text><p>S Cubed Technologies is a tech innovation company that specializes in service automation and intelligent systems. Our team works diligently to deliver the best possible tech solutions. our mission is to create simple solutions to complex tasks of life with the help of automation.</p></Text>
                    <a href="#">
                        <More><Link to="/Tech"><span>more</span></Link></More>
                    </a>
                </TechContainer>
            </ServicesContainer>
            
        )
    }
}

export default Services;