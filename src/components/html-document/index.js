/* eslint-disable react/no-danger */

import React from 'react';
import StylesheetTag from '~/components/stylesheet-tag';
import appSCSS from '~/static/styles/app.scss';
import gutenberg from '~/static/styles/gutenberg.css';
import AppIcons from '~/components/app-icons';

const HTMLDocument = ({ content, client: { cache } }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StylesheetTag prod_styles="gutenberg" dev_styles={gutenberg} />
        <StylesheetTag prod_styles="app" dev_styles={appSCSS} />
        <AppIcons />
        <title>NoomaPress</title>
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
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
