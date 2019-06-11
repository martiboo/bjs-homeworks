function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
        return true;
    }
    return false;
}

function memorize(fn, limit) {
    let results = [];

    return function (a, b) {

        let findValue = results.find((value, index) =>
            compareArrays([a, b], value.args));

        if (findValue !== undefined) {
            console.log('Результат берется из памяти');
            return findValue.result;
        }

        let functionResult = fn(a, b);

        let object = {
            args: [a, b],
            result: functionResult
        };

        if (results.length >= limit) {
            results.splice(0, 1);
        }
        results.push(object);

        console.log(results);
        return functionResult;
    }
}

const sum = (a, b) => {
    console.log('Функция вызвана не из памяти');
    return a + b;
}

const mSum = memorize(sum, 10);

mSum(5, 7);
mSum(6, 4);
mSum(7, 8);
mSum(4, 7);
mSum(5, 1);
mSum(5, 2);
mSum(5, 3);
mSum(5, 4);
mSum(5, 5);
mSum(5, 3);
mSum(5, 6);
mSum(5, 9);
mSum(4, 1);