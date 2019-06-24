import React from 'react';
import styled from 'styled-components';

const SpecialSSMotherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const SpeacialSSContainer = styled.div`
  max-width: 50%;
  min-width: 40%;
  margin-top: ${props => props.marginTop};
  div {
    margin-bottom: 7rem;
    background: #eeeeee;
    padding: 7vw;
    padding-bottom: 0rem;
  }
  img {
    width: 100%;
  }
`;

class SpecialSS extends React.Component{
    render(){
			return(
        <SpecialSSMotherContainer>
          <SpeacialSSContainer marginTop="0rem">
            { (this.props.specialSSes[0]) ? 
                <div>
                  <img src={this.props.specialSSes[0]} />
                </div> 
                : <></>
            }
            { (this.props.specialSSes[2]) ? 
                <div>
                  <img src={this.props.specialSSes[2]} />
                </div> 
                : <></>
            }
          </SpeacialSSContainer>
          <SpeacialSSContainer marginTop="20rem">
						{ (this.props.specialSSes[1]) ? 
                <div>
                  <img src={this.props.specialSSes[1]} />
                </div> 
                : <></>
            }
          </SpeacialSSContainer>
        </SpecialSSMotherContainer>
			)
		}
	}
    
export default SpecialSS;