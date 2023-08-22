//converts number to k,m,l
function formatCurrency(value) {
    let newValue = new Intl.NumberFormat(
        'en-us',
        { maximumFractionDigits: 1, notation: "compact", compactDisplay: "short" }
    ).format(value)
    if (newValue[0] == '-') {
        return newValue.slice(0, 1) + ' ' + newValue.slice(1);
    }
    else {
        return newValue;
    }
}

export { formatCurrency }