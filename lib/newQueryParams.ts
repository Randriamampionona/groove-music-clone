export function newQueryParams(urlQuery: string, queryObject: any) {
  // string -> object -> object + new object -> string

  const queryStringToQueryArray = urlQuery
    .split("&")
    .filter((query) => query !== "=")
    .map((query) => query.split("="));

  const queryArrayToQueryObjectArray = queryStringToQueryArray.map((arr) => ({
    [arr[0]]: arr[1],
  }));

  const queryObjects = Object.assign(
    queryArrayToQueryObjectArray[0],
    queryArrayToQueryObjectArray[1]
  );

  const newQueryObjects = {
    ...queryObjects,
    ...queryObject,
  };

  const newQueryObjectToQueryArray = Object.entries(newQueryObjects).flatMap(
    (keyValueArray) => !keyValueArray.includes(null) && keyValueArray.join("=")
  );

  const validQueryArray = newQueryObjectToQueryArray.filter(
    (query) => query !== "="
  );

  const newtUrlQuery = "?" + validQueryArray.join("&");

  return newtUrlQuery;
}
