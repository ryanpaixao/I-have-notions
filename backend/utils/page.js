export const formatPageData = (data) => {
  const formatedData = [];
  const dataIsObject = data !== null && typeof data === 'object';

  if (dataIsObject) {
    Object.keys(data).forEach((key) => {
      const hasRichText = data[key].rich_text && Array.isArray(data[key].rich_text);

      if (hasRichText) {
        formatedData.push([key, data[key].rich_text[0].plain_text]);
      }
    });
  }

  return formatedData;
};