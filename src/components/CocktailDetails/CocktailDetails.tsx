import React, { useEffect } from 'react';

import type { CocktailCode } from '../../types';
import {
  actions,
  selectors,
  useAppDispatch,
  useAppSelector,
} from '../../store';

import { Image } from '../Image';
import { CocktailDetailsSkeleton } from './CocktailDetailsSkeleton';
import styles from './styles.module.scss';

export const CocktailDetails = ({ code }: { code: CocktailCode }) => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(selectors.getDetailsSelector(code));

  useEffect(() => {
    if (details.type === 'idle') {
      dispatch(actions.requestDetails(code));
    }
  }, [code, details.type, dispatch]);

  if (details.type === 'error') {
    return (
      <div>
        <div className={styles.errorText}>Oops! {details.errorMessage}</div>
        <button onClick={() => dispatch(actions.requestDetails(code))}>
          Retry Load
        </button>
      </div>
    );
  }

  if (details.type === 'loading' || details.type === 'idle') {
    return <CocktailDetailsSkeleton />;
  }

  const {
    drink,
    drinkThumb,
    category,
    alcoholic,
    glass,
    instructions,
    measures,
    ingredients,
  } = details.data;

  return (
    <div>
      <div className={styles.detailsTop}>
        <div className={styles.shortInfo}>
          <h1 className={styles.title}>{drink}</h1>
          <div className={styles.info}>
            <div>
              <span className={styles.triangle} />{' '}
              <span style={{ color: '#832727' }}>{category}</span>
            </div>
            <div>
              <span className={styles.triangle} />{' '}
              <span style={{ color: '#e72828' }}>{alcoholic}</span>
            </div>
            <div>
              <span className={styles.triangle} />{' '}
              <span style={{ color: '#1e89d7' }}>{glass}</span>
            </div>
          </div>
          <div>
            <div>
              <b>Instructions:</b>
            </div>
            <br />
            <i>{instructions}</i>
          </div>
        </div>
        <div className={styles.picture}>
          <Image src={drinkThumb} alt="cocktail" />
        </div>
      </div>
      <div>
        <div>
          <b>List of ingredients:</b>
        </div>
        <br />
        <div>
          <table>
            <tbody>
              {new Array(Math.max(measures.length, ingredients.length))
                .fill(0)
                .map((_, i) => (
                  <tr key={i}>
                    <td>{measures[i]}</td>
                    <td>{ingredients[i]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
