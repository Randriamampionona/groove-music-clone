"use client";

import { CreatePlaylistsContext } from "@/store/context/CreatePlaylistContext";
import { useCreatePlaylistModal } from "@/store/useCreatePlaylistModal";
import { FormEvent, useState } from "react";

const CreatePlaylistModal = () => {
  // const { isOpen, toogle } = CreatePlaylistsContext();
  const { isOpen, toogle } = useCreatePlaylistModal((state) => state);
  const [name, setName] = useState("");

  const createHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toogle();
    console.log(name);
    setName("");
  };

  return (
    isOpen && (
      <div
        className="fixed z-10 flex items-center justify-center w-screen h-screen bg-black/50"
        onClick={toogle}
      >
        <form
          className="w-96 h-auto p-4 border border-blue-600 bg-zinc-800"
          onClick={(e) => e.stopPropagation()}
          onSubmit={createHandler}
        >
          <h1 className="text-xl text-center font-bold">
            Create a new playlist
          </h1>
          <p className="text-center">
            Add your favorites songs to one place to create a beautiful
            playlist.
          </p>

          <input
            type="text"
            autoFocus
            value={name}
            placeholder="Name this playlist"
            className="w-full bg-zinc-100 text-zinc-900 outline-none border-0 px-2 py-1 mt-4 rounded-sm"
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex items-center justify-end w-full mt-6 space-x-2">
            <button
              type="button"
              className="bg-transparent border-0 outline-none text-blue-600 px-8 py-2"
              onClick={toogle}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-zinc-100 px-8 py-2"
            >
              Create playlist
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default CreatePlaylistModal;
