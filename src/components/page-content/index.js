import React from 'react';

function PageContent(content) {
  const html = content.content;
  if (html) {
    return (
      <section>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    );
  }
  return <div />;
}

export default PageContent;
