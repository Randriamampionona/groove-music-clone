"use client";

import { useSelect } from "@/store/useSelect";

const GroupAction = () => {
  const { musics, cancel } = useSelect((state) => state);

  return musics.length ? (
    <section className="fixed top-0 flex items-center justify-between w-fillAvailable p-4 z-20">
      <p>{musics.length} selected</p>

      <div className="flex items-center justify-end space-x-6">
        <li
          className="hover:text-blue-600 cursor-pointer list-none"
          onClick={cancel}
        >
          Cancel
        </li>
        <li className="hover:text-blue-600 cursor-pointer list-none">Play</li>
        <li className="hover:text-blue-600 cursor-pointer list-none">
          Add to playlist
        </li>
        <li className="hover:text-blue-600 cursor-pointer list-none">Delete</li>
      </div>
    </section>
  ) : null;
};

export default GroupAction;
