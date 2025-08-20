export const databaseReqParams = (query) => {
  const params = {};
  const queryIsObject = query !== null && typeof query === 'object';

  if (queryIsObject) {
    Object.entries(query).forEach(([key, value]) => {
      switch (key) {
        case "Hierarquia":
          params.filter = {
            property: key,
            select: {
              equals: value
            }
          }
          break;

        default:
          break;
      }
    });
  }

  return params;
};