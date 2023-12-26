import { data } from "@/data";

type Params = "title" | "genre" | "artist" | undefined;

export default async function getMusicList(sortingType?: Params) {
  if (!!sortingType) {
    const sortedData = data.toSorted((a, b) =>
      a[sortingType].localeCompare(b[sortingType])
    );

    return sortedData;
  }

  return data;
}
