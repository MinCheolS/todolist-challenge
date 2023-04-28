import React from 'react'
import styled from 'styled-components'

const Sttodocontainer = styled.div`
    width: 270px;
    border: 4px solid rgb(156, 183, 255);
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`
const Stbuttons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`
const Sttododeletebutton = styled.button`
    border: 2px solid red;
    background-color: #fff;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
`
const Sttodoeditbutton = styled.button`
    border: 2px solid rgb(93, 82, 255);
    background-color: #fff;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
`

function Todo({todo, onDeleteHanlder, onEditHandler}) {
    
  return (
    <Sttodocontainer>
        <div>
            <h2>{todo.title}</h2>
            <div>{todo.body}</div>
        </div>
        <Stbuttons>
            <Sttododeletebutton
            onClick={() => onDeleteHanlder(todo.id)}
            >
            삭제하기
            </Sttododeletebutton>
            <Sttodoeditbutton
            onClick={() => onEditHandler(todo.id)}
            >
            {todo.isDone ? '취소' : '완료'}
            </Sttodoeditbutton>
        </Stbuttons>
    </Sttodocontainer>
  )
}

export default Todo