module.exports = function (arr) {
    let string = "";
    let i = 0;

    for (; i < arr.length; i++) {
        if (i) string += ',';
        string += arr[i];
        checkNext(i, arr);
    }
    return string;

    function checkNext(num, arr) {
        if (arr[num] + 1 === arr[num + 1]) {
            for (let j = num + 1, acc = 0; j < arr.length; j++, acc++) {
                if (arr[j] + 1 === arr[j + 1]) continue;

                const separator = acc ? '-' : ',';
                string += separator + arr[j];

                i = j;
                break;
            }
        }
    }
};
