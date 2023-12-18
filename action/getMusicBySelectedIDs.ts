"use server";

import getMusicList from "./getMusicList";

export const getMusicBySelectedIDs = async (selectedIDs: string[]) => {
  const data = await getMusicList();

  const results = selectedIDs.map((id) => {
    return data.filter((m) => m.id === id)[0];
  });

  return results;
};
