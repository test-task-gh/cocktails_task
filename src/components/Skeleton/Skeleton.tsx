import React from 'react';

import styles from './styles.module.scss';

type SkeletonProps = {
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  radius?: number;
};

export const Skeleton = ({
  width,
  height,
  maxWidth,
  radius,
}: SkeletonProps) => {
  return (
    <div
      className={styles.root}
      style={{ width, height, maxWidth, borderRadius: radius }}
    />
  );
};
