import React from 'react'
import styled from 'styled-components'


const Container = styled.section`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100vh;
background-color: #f0f2f5;
`

const CenterContainer = ({children}) => {

  return (
    <Container>{children}</Container>
  )
}

export default CenterContainer