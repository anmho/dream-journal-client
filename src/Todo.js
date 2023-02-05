import React from 'react'

export default function Todo({todo}) {
    return (
    <div>
        <label>
            {/* <p>Date: </p>
            {todo.name} */}

            <div className='bg-blue-500 py-5 px-4 margin-bottom: 10px mb-1 w-1/2'>
                <p>Date: </p>
                {todo.name}
            </div>
        </label>
    </div>
  )
}
