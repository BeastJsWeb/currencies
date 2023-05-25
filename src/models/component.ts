import { Dispatch, SetStateAction } from 'react';

export interface IUpdateDataCurrencies {
  isClickedUpdate: number,
  fetchSuccess: Dispatch<SetStateAction<boolean>>
}
