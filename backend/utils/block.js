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
