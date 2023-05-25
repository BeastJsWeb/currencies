import { ICurrenciesList } from '../../models/rates';

export const useAmount = (
    rate: ICurrenciesList | undefined,
    currencyAmountChanged: boolean,
    currencyAmount: number,
) => {
    let toAmount;
    let fromAmount;

    if (rate) {
        const currencyRateTo = Number(Object.values(rate));
        if (currencyAmountChanged) {
            fromAmount = currencyAmount;
            toAmount = currencyAmount * currencyRateTo;
            toAmount = +toAmount.toFixed(3);
        } else {
            toAmount = currencyAmount;
            fromAmount = currencyAmount / currencyRateTo;
            fromAmount = +fromAmount.toFixed(3);
        }
    }

    return {
        toAmount,
        fromAmount,
    };
};
