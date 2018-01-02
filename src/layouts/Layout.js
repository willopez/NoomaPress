import React from 'react';
import { Route, Switch } from 'react-router';
import Helmet from 'react-helmet';
// import ReactGA from 'react-ga';
import routes from '~/routes/index';
import Header from '~/components/header';
import Footer from '~/components/footer';

const ReactGA = process.browser ? require('react-ga') : {};

if (process.browser) {
  // Initialize Analytics
  // ReactGA.initialize('UA-74643563-4');
}

function logPageView() {
  if (process.browser) {
    // ReactGA.set({ page: window.location.pathname });
    // ReactGA.pageview(window.location.pathname);
  }

  return null;
}

const Layout = () => (
  <React.Fragment>
    <Route path="/" component={logPageView} />
    <div className="container">
      <Helmet
        htmlAttributes={{ lang: 'en', amp: undefined }}
        titleTemplate="%s | NoomaPress"
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: 'A modern framework for WordPress UIs',
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      />
      <Header />
      <main role="main" className="main-content">
        <Switch>
          {routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
      </main>
    </div>
    <Footer />
  </React.Fragment>
);

export default Layout;
