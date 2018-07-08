// importing component & react
import React, { Component } from 'react';

import Eyes from './Eyes'

// import default styled components
import styled from "styled-components"

// // declare a component class
// class Potato extends Component {
//   render() {
//     return (
//       <h1>Patootie</h1>
//     );
//   }
// }

const PotatoSkin = styled.div`
  position: relative;
  width: 300px;
  height:300px;
  z-index: 0;
`

const PotatoForehead = styled.div`
  background-color: #ECB482;
  width: 176px;
  height: 171px;
  border-radius: 100%;
  position: absolute;
  top: -52px;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const PotatoBodice = styled.div`
  background-color: #ECB482;
  width: 239px;
  height: 239px;
  border-radius: 100%;
  position: absolute;
`

// function component for rendering
function Potato() {
  return (
    <PotatoSkin >
      <PotatoForehead>
      <Eyes />
      </PotatoForehead>
      <PotatoBodice></PotatoBodice>
    </PotatoSkin>
  )
}

// export Potato component
export default Potato;
