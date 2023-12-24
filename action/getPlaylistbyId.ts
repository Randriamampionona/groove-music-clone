"use server";

import { playlistData } from "@/data";

export default async function getPlaylistId(id: string) {
  const result = playlistData.find((playlist) => playlist.id == id);

  return result;
}
