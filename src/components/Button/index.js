import styled from 'styled-components'

export default styled.button`
  border: none;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  cursor: pointer;
  border-radius: 0;
  outline: none;
  font-weight: 700;
  box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.3);
  background: ${props => props.background};
  height: ${props => props.height};
  width: ${props => props.width};
`
