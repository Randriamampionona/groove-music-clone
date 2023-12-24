"use server";

import getMusicList from "./getMusicList";

export const getMusicByIDs = async (selectedIDs: string[]) => {
  const data = await getMusicList();

  const results = selectedIDs.map((id) => {
    return data.filter((m) => m.id === id)[0];
  });

  return results[0] === undefined ? null : results;
};
