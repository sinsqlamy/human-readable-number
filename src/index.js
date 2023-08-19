module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    return number
        .toString()
        .split("")
        .map((item) => {
            for (let index = 0; index < digits.length; index++) {
                const element = digits[index];
                if (item == index) {
                    item = element;
                    return item;
                }
            }
        })
        .join(" ");
};
