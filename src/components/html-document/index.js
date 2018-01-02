/* eslint-disable react/no-danger */

import React from 'react';
import StylesheetTag from '~/components/stylesheet-tag';
import appSCSS from '~/static/styles/index.scss';
import gutenberg from '~/static/styles/gutenberg.css';
import AppIcons from '~/components/app-icons';

const HTMLDocument = ({ content, helmet, client: { cache } }) => {
  return (
    <html lang="en" {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.link.toComponent()}
        <StylesheetTag prod_styles="gutenberg" dev_styles={gutenberg} />
        <StylesheetTag prod_styles="app" dev_styles={appSCSS} />
        <AppIcons />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          charSet="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              cache.extract()
            )};`,
          }}
        />
        <script src="/static/client/bundle.js" charSet="UTF-8" />
      </body>
    </html>
  );
};

export default HTMLDocument;
