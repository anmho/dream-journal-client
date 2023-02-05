import React from 'react'

export default function Sidebar() {
  return (
    <>
    <div className="fixed top-0 justify-start h-screen w-1/6 bg-gradient-to-r from-[#01002C] to-blue-500 p-8">
        <p className="text-3xl text-white font-bold mb-5 color-white">
            Settings        
            <img src="pngegg.png" alt="settingsicon" height="30" width="30" margin-left/>
        </p>
    </div>
    </>
  )
}
