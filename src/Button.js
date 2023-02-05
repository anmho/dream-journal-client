import React from 'react';
import Popup from 'reactjs-popup';




export default function Button(){

    const PopupExample = () => (
        <Popup trigger={<button idclass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BUTTON</button>} position="top left">
        {close => (
            <div>
            TYPE 
            <a className="close" onClick={close}>
                &times;
            </a>
            </div>
        )}
        </Popup>
    );
    
    const Modal = () => (
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
          <span> Modal content </span>
        </Popup>
    );
    
    
    return(
        // <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">

        //     <button >Button</button>
        
        // </div>
        {PopupExample}
    )
}