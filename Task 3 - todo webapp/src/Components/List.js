import React from 'react'

function List({todo, index, markTodo, removeTodo}) {
  return (
    <div >
        
      <div className='flex justify-between pt-4 border-b-2 pb-4'>
      <span>{todo.date}</span>

      <span className='mr-24' style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>

      <div>
        <button className='border-2 border-green-500 bg-green-400 rounded-xl p-1 mx-2'  onClick={() => markTodo(index)}>✓</button>
        <button className='border-2 border-red-500 bg-red-400 rounded-xl p-1 mx-2'  onClick={() => removeTodo(index)}>✕</button>
      </div>

      </div>
    </div>
  )
}

export default List