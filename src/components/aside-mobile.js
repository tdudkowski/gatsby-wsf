import React from "react"
import Aside from "./aside"
import styled from "styled-components"

const AsideStyled = styled(Aside)`
  display: none;
  @media screen and (max-width: 799px) {
    display: block;
  }
`

const AsideMobile = () => <AsideStyled className={`aside-mobile`} />

export default AsideMobile
