import React from 'react';
import styled from 'styled-components';

const SingleImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  div {
    width: ${props => props.width || "70rem"};
  }
  img {
    width: 100%;
  }
`;

class SingleImg extends React.Component{
    render(){
        return(
            <SingleImgContainer className="singleImg" width={this.props.width}>
                <div>
                    <img src={this.props.img} />
                </div>
            </SingleImgContainer>
        )
    }
}

export default SingleImg;