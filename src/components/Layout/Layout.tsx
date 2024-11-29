import React from 'react';

import styles from './styles.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};
