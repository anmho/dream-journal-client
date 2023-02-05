import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Login() {
  return (
    <div className="bg-login-background fixed min-w-full h-auto absolute z-10 ">
        <p className="text-5xl text-white font-bold mb-5 color-white absolute z-100">
            Dream Journal
        </p>
        {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sign In
        </button> */}
    </div>
  )
}

function MyDialog() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Sign In</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}
