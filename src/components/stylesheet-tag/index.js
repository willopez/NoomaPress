import React from 'react';

const dev = process.env.NODE_ENV === 'development';

const StylesheetTag = props => {
  if (dev) {
    const element = dev && (
      <style dangerouslySetInnerHTML={{ __html: props.dev_styles }} />
    );
    return element;
  }

  const link = `static/css/${props.prod_styles}.css`;

  return <link rel="stylesheet" href={link} />;
};

export default StylesheetTag;
