export const formatPageData = (data) => {
  const formatedRichText = [];
  const dataIsObject = data !== null && typeof data === 'object';
  const pageTitle = dataIsObject && data.Nome?.title?.[0]?.plain_text;
  console.log('data.Nome ==>>', data.Nome);
  if (dataIsObject) {
    Object.keys(data).forEach((key) => {
      // console.log('key ==>>', key);
      const richText = data[key].rich_text
      const hasRichText = richText && Array.isArray(richText);

      hasRichText && richText.forEach(text => {
        // console.log(`${key} ==>>`, data[key])
        text.plain_text && formatedRichText.push([key, text.plain_text]);
      });
    });
  }

  return {
    pageTitle,
    sections: formatedRichText
  };
};