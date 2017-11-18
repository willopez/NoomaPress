import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import PageContent from '~/components/page-content';
import PAGE_CONTENT_QUERY from '~/graphql/PageContentQuery.graphql';

class HomePage extends Component {
  render() {
    const { pageContent } = this.props.data;
    return (
      <div>
        <Helmet title="Welcome" />
        <PageContent {...pageContent} />
      </div>
    );
  }
}

const withData = graphql(PAGE_CONTENT_QUERY, {
  options: {
    variables: {
      slug: 'home',
    },
  },
  props: ({ data }) => ({
    data,
  }),
});

export default withData(HomePage);
