import React from 'react'
import styled from 'styled-components'

const Stcontainer = styled.div`
    border: 1px solid #dddddd;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: 12px;
    `

function Header() {
  return (
    <Stcontainer>
         <div>My Todo List</div>
         <div>React</div>
    </Stcontainer>
  )
}

export default Header