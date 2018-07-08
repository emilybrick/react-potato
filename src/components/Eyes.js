// importing component & react
import React, { Component } from 'react';

// import default styled components
import styled from "styled-components"

const EyeSockets = styled.div `
  display: flex;
`

const EyeWhite = styled.div`
  position: relative;
  width: 37px;
  height:37px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EyeLeft = EyeWhite.extend`
  bottom: 5px;
`

const EyeRight = EyeWhite.extend`
  left: -5px;
`

const Pupil = styled.div`
  height: 13px;
  width: 13px;
  border-radius: 100%;
  background-color: #222;
  position: relative;
  top: ${props => props.top};
  left: ${props => props.left};

`


// function component for rendering
function Eyes() {
  return (
    <EyeSockets>
      <EyeLeft>
        <Pupil top='1px' left='1px'/>
      </EyeLeft>
      <EyeRight>
        <Pupil top='1px' left='-4px'/>
      </EyeRight>
    </EyeSockets>
  )
}

// export Potato component
export default Eyes;
