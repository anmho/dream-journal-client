import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UserService from "../services/user";

export default function MyModal({ setLoggedIn }) {
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
      <div
        style={{
          backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpurple-gradient&psig=AOvVaw0_BeqTCQqNpkzmj1zYCb0y&ust=1675655504901000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjw7aq9_fwCFQAAAAAdAAAAABAD")`,
        }}
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Sign In
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
      </div>
    </>
  );
}
