import React, { useState } from 'react';
import { NavLink } from 'react-router';

import './styles.css';

import { COCKTAILS } from '../../constants';

export const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="NavMenu">
        {[
          COCKTAILS.margarita,
          COCKTAILS.mojito,
          COCKTAILS.a1,
          COCKTAILS.kir,
        ].map(({ code, name }) => (
          <NavLink key={code} to={`/${code}`} end>
            {name}
          </NavLink>
        ))}
      </div>
      {isOpen && <div className="substrate" onClick={() => setOpen(false)} />}
      <div className="NavMenuMini" onClick={() => setOpen(!isOpen)}>
        <div className="burger">
          <div />
          <div />
          <div />
        </div>
        <div className={`links${isOpen ? ' linksOpen' : ''}`}>
          {[
            COCKTAILS.margarita,
            COCKTAILS.mojito,
            COCKTAILS.a1,
            COCKTAILS.kir,
          ].map(({ code, name }) => (
            <NavLink key={code} to={`/${code}`} end>
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
