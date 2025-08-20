export const formatBlockChildrenData = (data) => {
  const formatedData = [];

  if (Array.isArray(data)) {
    data.forEach((textObj) => {
      const richText = textObj?.paragraph?.rich_text

      if (Array.isArray(richText)) {
        richText.forEach((textObj) => {
          textObj?.plain_text && formatedData.push(textObj.plain_text);
        });
      }
    });
  }

  return formatedData;
};

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