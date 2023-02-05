import React from 'react'

export default function Todo({todo}) {
    return (
    <div>
        <label>
            

            <div className='bg-purple-500 py-5 px-4 margin-bottom: 10px mb-1 w-1/2 h-100' >
            
            <div className="flex justify-center item-start">
                <div className="w-1/2 p-20 bg-black h-100">
                Column 1
                </div>
                <div className="w-1/2 p-8 bg-orange-500">
                <p className="">Date: </p>
                <p className="">Title: </p>
                {todo.name}
                </div>
            </div>
                
                
            </div>
        </label>
    </div>
  )
}
