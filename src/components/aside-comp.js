import React from "react"
import styled from "styled-components"
import Aside from "./aside"

const AsideStyled = styled(Aside)`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
`

const AsideComp = () => <AsideStyled />

export default AsideComp
