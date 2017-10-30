/* eslint-disable react/no-danger */

import React from 'react';
import StylesheetTag from '../stylesheet-tag';
import appSCSS from '../../style/app.scss';
import gutenberg from '../../style/gutenberg.css';

const HTMLDocument = ({ content, client: { cache } }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StylesheetTag prod_styles="gutenberg" dev_styles={gutenberg} />
        <StylesheetTag prod_styles="app" dev_styles={appSCSS} />
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
