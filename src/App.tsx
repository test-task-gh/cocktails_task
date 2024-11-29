import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router';
import { Provider } from 'react-redux';

import { COCKTAILS } from './constants';
import { store } from './store';
import {
  Redirect,
  NotFoundPage,
  NavMenu,
  Layout,
  CocktailPage,
  Content,
} from './components';

const isHash = window.location.href.includes('github.io');

export const App = () => {
  useEffect(() => {
    if (isHash) {
      alert('HASH ROUTING ENABLED, THERE IS NO SPA ON github.io');
    }
  }, []);

  const Router = isHash ? HashRouter : BrowserRouter;

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <NavMenu />
          <Content>
            <Routes>
              <Route
                path="/"
                element={<Redirect to={`/${COCKTAILS.margarita.code}`} />}
              />
              <Route path="/:code" element={<CocktailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </Provider>
  );
};
