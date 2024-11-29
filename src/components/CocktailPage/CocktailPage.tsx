import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import type { CocktailCode } from '../../types';
import { COCKTAILS } from '../../constants';
import { NotFoundPage } from '../NotFoundPage';
import { CocktailDetails } from '../CocktailDetails';

const getIsValidCode = (param: string): param is CocktailCode =>
  param in COCKTAILS;

const getCocktailCode = (
  param?: string,
): { code: CocktailCode | null; shouldRedirect: boolean } => {
  if (!param) {
    return { code: COCKTAILS.margarita.code, shouldRedirect: true };
  }

  if (getIsValidCode(param)) {
    return { code: param, shouldRedirect: false };
  }

  return { code: null, shouldRedirect: false };
};

export const CocktailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { code, shouldRedirect } = getCocktailCode(params.code);

  useEffect(() => {
    if (shouldRedirect) {
      navigate(`/${COCKTAILS.margarita.code}`);
    }
  }, [shouldRedirect, navigate]);

  if (!code) {
    return <NotFoundPage />;
  }

  return <CocktailDetails code={code} />;
};
