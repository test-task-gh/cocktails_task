import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export const Image = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.root}>
      {!loaded && <div className={styles.imgPlaceholder} />}
      <img
        className={cn(styles.img, { [styles.hidden]: !loaded })}
        alt={alt}
        src={src}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
