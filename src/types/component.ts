import { Dispatch, SetStateAction } from 'react';

export interface IUpdateDataCurrencies {
  isClickedUpdate: number,
  fetchSuccess: Dispatch<SetStateAction<boolean>>
}

export interface INavbar {
  clicked: Dispatch<SetStateAction<number>>,
  updated: boolean,
}
