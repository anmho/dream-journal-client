import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UserService from "./services/user";

export default function SignIn({ setLoggedIn }) {
  let [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async () => {
    console.log(username, password);
    await UserService.loginUser(username, password);
    setLoggedIn(true);
  };

  return (
    <>
      <body class="h-screen bg-gradient-to-t from-indigo-300 to-purple-450">
        <h1 className="font-bold text-white text-9xl text-center pt-20 drop-shadow-2xl dsf">
          DREAM JOURNAL
        </h1>

        <div className="fixed inset-0 flex items-center justify-center mt-60">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 h-20 w-40 drop-shadow-2xl"
          >
            <div className="border-0 font-bold text-2xl">Sign Up</div>
          </button>
        </div>

        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 h-20 w-40 drop-shadow-2xl"
          >
            <div className="border-0 font-bold text-2xl">Sign In</div>
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <p className="font-bold">Username:</p>

                      <input
                        className="border-2 border-black"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg font-medium leading-6 text-gray-900">
                        <p className="font-bold">Password:</p>
                        <input
                          className="border-2 border-black"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                      >
                        Sign In
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </body>
    </>
  );
}
