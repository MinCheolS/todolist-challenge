import React from 'react'
import styled from 'styled-components'
import Todo from '../todo/Todo'

const Stlistcontainer = styled.div` 
    padding: 0 24px;
`
const Stlistgroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

function List({todos, setTodos}) {
    const onDeleteHanlder = (todoId) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoId
        })
        setTodos(newTodos)
    }

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === todoId) {
                return {
                    ...todo,
                    isDone : !todo.isDone
                }
            }
            else {
                return {...todo}
            }
        })
        setTodos(newTodos)
    }
  return (
    <Stlistcontainer>
        <h2>Working..🔥</h2>
        <Stlistgroup>
        {todos.map((todo) => {
            if(!todo.isDone) {
                return (
                    <Todo 
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                    onDeleteHanlder={onDeleteHanlder}
                    onEditHandler={onEditHandler}
                    />
                )
            }
            else{
                return null
            }
        })}
        </Stlistgroup>
        <h2>Done!!🎉</h2>
        <Stlistgroup>
        {todos.map((todo) => {
            if(todo.isDone) {
                return (
                    <Todo 
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                    onDeleteHanlder={onDeleteHanlder}
                    onEditHandler={onEditHandler}
                    />
                )
            }
            else{
                return null
            }
        })}
        </Stlistgroup>
    </Stlistcontainer>
  )
}

export default List