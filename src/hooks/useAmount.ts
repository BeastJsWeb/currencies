export const useAmount = (
    amountChanged: boolean,
    amount: number,
    rate?: number,
) => {
    let toAmount;
    let fromAmount;

    if (rate) {
        if (amountChanged) {
            fromAmount = amount;
            toAmount = amount * rate;
            toAmount = +toAmount.toFixed(3);
        } else {
            toAmount = amount;
            fromAmount = amount / rate;
            fromAmount = +fromAmount.toFixed(3);
        }
    }

    return {
        toAmount,
        fromAmount,
    };
};
