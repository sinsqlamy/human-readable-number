const digits = [
    "zero", "one", "two", "three", "four", 
    "five", "six", "seven", "eight", "nine"
];

const teens = [
    "ten", "eleven", "twelve", "thirteen", 
    "fourteen", "fifteen", "sixteen", "seventeen", 
    "eighteen", "nineteen"
];

const tens = [
    "", "", "twenty", "thirty", "forty", 
    "fifty", "sixty", "seventy", "eighty", "ninety"
];

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    function convertBelow100(num) {
        if (num < 10) {
            return digits[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const tenDigit = Math.floor(num / 10);
            const unitDigit = num % 10;
            return `${tens[tenDigit]}${unitDigit !== 0 ? " " + digits[unitDigit] : ""}`;
        }
    }

    if (number < 100) {
        return convertBelow100(number);
    }

    const hundredDigit = Math.floor(number / 100);
    const remainder = number % 100;

    if (remainder === 0) {
        return `${digits[hundredDigit]} hundred`;
    }

    return `${digits[hundredDigit]} hundred ${convertBelow100(remainder)}`;
};
