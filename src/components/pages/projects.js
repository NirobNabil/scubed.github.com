import React, { Component } from 'react'
import styled from 'styled-components'
import Projects from './home/projects'
import landing1 from '../../assets/landing2.png';
import landing2 from '../../assets/landing1.jpg';
import landing3 from '../../assets/dummy.jpg';

const PageWrapper = styled.div`
    background: white;
`

const projects = {
    'Electronics Based Startup1': {
        name: ["Electronics Based", <br></br> ,"Startup1"], //this name represents a jsx object
        img: landing1
    },
    'Electronics Based Startup2': {
        name: ["Electronics Based", <br></br> ,"Startup2"],
        img: landing2
    },
    'Electronics Based Startup3': {
        name: ["Electronics Based", <br></br> ,"Startup1"], //this name represents a jsx object
        img: landing1
    },
    'Electronics Based Startup4': {
        name: ["Electronics Based", <br></br> ,"Startup2"],
        img: landing2
    },
}

class ProjectsPage extends Component{
    render(){
        return (
            <PageWrapper>
                <Projects sr={this.props.sr} projects={projects}></Projects>
            </PageWrapper>
        )
    }
}

export default ProjectsPage