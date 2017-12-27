import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';

import PageContent from '~/components/page-content';
import PAGE_CONTENT_QUERY from '~/graphql/PageContentQuery.graphql';

class DynamicPage extends Component {
  render() {
    const { page } = this.props.data;
    const title = page ? page.title : '';
    return (
      <div>
        <Helmet title={title} />
        <PageContent {...page} />
      </div>
    );
  }
}

const withData = graphql(PAGE_CONTENT_QUERY, {
  options: props => ({
    variables: {
      slug: props.location.pathname,
    },
  }),
  props: ({ data }) => ({
    data,
  }),
});

export default withRouter(withData(DynamicPage));
