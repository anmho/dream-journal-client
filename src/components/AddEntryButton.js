import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsPlus } from "react-icons/bs";
import ImageService from "../services/images";
import EntryService from "../services/entry";
import UserService from "../services/user";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function AddEntryButton({ setEntries }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChangeTitle = (e) => {
    console.log(title);
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    console.log(description);
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    // request a image url
    e.preventDefault();
    const { url } = await ImageService.postImage(title);

    // get image

    const entry = {
      title,
      description,
      url,
      created_by: await UserService.getUserId(),
    };

    // use image to create the entry
    await EntryService.addEntry(entry);

    // fetch new entries
    const entries = await EntryService.getEntries(UserService.getUserId());

    setEntries(entries);

    // close modal

    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="fixed bottom-10 right-10 rounded-full bg-white p-2 text-sm text-black font-bold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <BsPlus size={30} />
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
                    What did you dream about today?
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <p className="text-sm text-gray-500 mb-2">
                      Enter some details about what your dreamed about and we
                      will generate a recreation.
                    </p>
                    <label class="block text-sm font-medium text-slate-700">
                      Title
                    </label>

                    <input
                      onChange={handleChangeTitle}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                    <label class="block text-sm font-medium text-slate-700">
                      Description
                    </label>
                    <textarea
                      onChange={handleChangeDescription}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
