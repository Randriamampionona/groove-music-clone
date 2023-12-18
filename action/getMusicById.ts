"use server";

import { data } from "@/data";

export default async function getMusicById(id: string) {
  const requestedData = data.filter((music) => music.id == id)[0];

  const nextId =
    id == data.at(-1)?.id
      ? data[0].id
      : data[data.findIndex((n) => n.id == id) + 1]?.id;

  const prevId =
    data[
      data.findIndex((n) => n.id == id) - 1 < 0
        ? 0
        : data.findIndex((n) => n.id == id) - 1
    ].id;

  const music = {
    ...requestedData,
    next: nextId,
    prev: prevId,
  };

  return music;
}
