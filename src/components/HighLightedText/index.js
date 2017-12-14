import styled from 'styled-components'

export default styled.span`
  display: inline-block;
  padding: 7px 10px;
  position: relative;
  margin: 0 5px;
  cursor: default;
  background-color: ${props => props.backgroundColor || '#15233c'};
  box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.3);
`
