import React from "react"
import styled from "styled-components"

const DivStyled = styled.div`
  background-color: red;
  margin: 20rem;
  z-index: 100;
`

const Testo = () => (
  <DivStyled>
    <p>testo</p>
    <p>here</p>
  </DivStyled>
)

export default Testo
