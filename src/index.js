const { constants } = require("mocha/lib/suite");

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

    let reablePower = number.toString().split("").length;

    let reable = number
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
        });

    if (reablePower == 3) {
        reable[0] += " hundred";

        if (reable[1][reable[1].length - 1] == "t") {
            reable[1] += "y";
        } else {
            reable[1] += "ty";
        }
    }
    if (reablePower == 2) {
        if (reable[0][reable[0].length - 1] == "t") {
            reable[0] += "y";
        } else {
            reable[0] += "ty";
        }
    }

    reable.forEach((element) => {
        if (element == "zero" && reablePower != 1) {
            reable.pop();
        }
    });

    reable.forEach((element) => {
        if (element == "onety") {
            if (reable[2] == undefined) {
                return;
            }
            if (reable[2][reable[2].length - 1] == "t") reable[2] += "een";
            else reable[2] += "teen";
            reable.splice(1, 1);
        }
        if (element == "zeroty") {
            reable.splice(1, 1);
        }
    });
    reable = reable.map((item) => {
        if (item == "fivety") {
            return (item = "fifty");
        } else if (item == "fourty") {
            return (item = "forty");
        } else if (item == "threety") {
            return (item = "thirty");
        } else if (item == "onety") {
            return (item = "ten");
        } else if (item == "twoty") {
            return (item = "twenty");
        } else if (item == "oneteen") {
            return (item = "eleven");
        } else if (item == "twoteen") {
            return (item = "twelve");
        } else if (item == "threeteen") {
            return (item = "thirteen");
        } else if (item == "fiveteen") {
            return (item = "fifteen");
        } else {
            return (item = item);
        }
    });

    return reable.join(" ");
};

/*

*/
