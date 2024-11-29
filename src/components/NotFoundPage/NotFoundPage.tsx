import React from 'react';
import { Link } from 'react-router';

import styles from './styles.module.scss';

import { COCKTAILS } from '../../constants';

export const NotFoundPage = () => (
  <div className={styles.root}>
    <h1>Page Not Found</h1>
    <Link to={`/${COCKTAILS.margarita.code}`}>Go to main</Link>
  </div>
);
