"use server";

import { playlistData } from "@/data";

export default async function getPlaylist() {
  return playlistData;
}
