import React from 'react'
import styled from 'styled-components'

const Stlayout = styled.div`
        max-width: 1200px;
        min-width: 800px;
        margin: 0 auto;
    `
    
function Layout(props) {
    
  return (
    <Stlayout>{props.children}</Stlayout>
  )
}

export default Layout