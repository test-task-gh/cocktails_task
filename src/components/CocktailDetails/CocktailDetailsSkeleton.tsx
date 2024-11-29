import React from 'react';

import { Skeleton } from '../Skeleton';

import styles from './styles.module.scss';

export const CocktailDetailsSkeleton = () => (
  <div>
    <div className={styles.detailsTop}>
      <div className={styles.shortInfo}>
        <h1 className={styles.title}>
          <Skeleton height={30} maxWidth={300} radius={8} />
        </h1>
        <div className={styles.info}>
          <Skeleton height={60} maxWidth={200} radius={8} />
        </div>
        <div>
          <div>
            <Skeleton height={20} maxWidth={200} radius={8} />
          </div>
          <br />
          <Skeleton height={130} radius={8} />
        </div>
      </div>
      <div className={styles.picture}>
        <Skeleton height={300} width={300} radius={8} />
      </div>
    </div>
    <div>
      <div>
        <Skeleton height={20} maxWidth={300} radius={8} />
      </div>
      <br />
      <div>
        <Skeleton height={400} radius={16} />
      </div>
    </div>
  </div>
);
