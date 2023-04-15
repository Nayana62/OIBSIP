import React, {useState} from 'react'

function Form({addTodo}) {

  const[value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className='w-[50%] p-4 bg-white m-[auto] shadow-xl '>
        
        <h2 className='font-bold mb-2 text-start'>New Todo:</h2>

        <form className='text-start flex' onSubmit={handleSubmit}>
          
            <input type='text' placeholder='Title' className='border-2 rounded p-2 w-[90%] ' required value={value} onChange={e => setValue(e.target.value)}></input>

           <button onClick={handleSubmit} type='submit' className='rounded p-2 mx-4 w-20 bg-green-500 hover:bg-green-400' >Add</button>
        </form>
    </div>
  )
}

export default Form