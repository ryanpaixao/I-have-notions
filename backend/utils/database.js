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

export const groupByType = (results) => {
  const types = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'];
  const response = {};

  types.forEach((type) => {
    response[type] = [];

    results.forEach((page) => {
      const title = page.properties.Nome?.title?.[0]?.plain_text;

      if (title.includes(type)) {
        const pageData = {
          id: page.id,
          title
        }
        response[type].push(pageData);
      }
    });
  });

  return response;
};