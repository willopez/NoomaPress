import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';

import PageContent from '~/components/page-content';
import PAGE_CONTENT_QUERY from '~/graphql/PageContentQuery.graphql';

class AboutPage extends Component {
  render() {
    const { pageContent } = this.props.data;
    return (
      <div>
        <Helmet title="About" />
        <PageContent {...pageContent} />
      </div>
    );
  }
}

const withData = graphql(PAGE_CONTENT_QUERY, {
  options: {
    variables: {
      slug: 'about',
    },
  },
  props: ({ data }) => ({
    data,
  }),
});

export default withData(AboutPage);
