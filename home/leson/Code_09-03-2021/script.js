function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const value = callback(array[i], i, array);
        result.push(value);
    }

    return result;
}

const r = map([1, 2, 3, 4, 5], function(value) {
    return value * 2;
});
console.log(r);

// const sum = (x) => (y) => x + y;
// const sum5 = sum(5);
// console.log(sum5(3));

const dev = {
    email: "peter@parker.com",
    projects: [
        {
            name: "Domino Pizza",
        },
        {
            name: "Bank Of America",
        }
    ],
    role: { id: 1, name: "admin" },
    hobby: null
}

function isObject(x) {
    return typeof x === "object" && x !== null && !Array.isArray(x);
}

function deepCopy(x) {
    if (isObject(x)) {
        const result = {};
        for (const key in x) {
            const value = x[key];
            const cloneValue = deepCopy(value);

            result[key] = cloneValue;
        }
        return result;
    } else if (Array.isArray(x)) {
        const result = [];

        for (const value of x) {
            const cloneValue = deepCopy(value);
            result.push(cloneValue);
        }
        return result;
    } else {
        return x;
    }
}

const clone = deepCopy(dev);

// clone.email = "";

console.log(dev);
console.log(clone);

console.log(dev === clone, dev.projects === clone.projects, dev.role === clone.role);

const ar = [1, 2, 3];
ar[10] = 5;
console.log(ar);

console.log(ar[40]);

ar.forEach(function(v) {
    console.count("FOREACH");
    console.log(v);
});

function comparison(target, origin) {
    if (Object.keys(target).length !== Object.keys(origin).length) {
        return false;
    }

    for (let key in target) {
        if (target[key] !== origin[key]) {
            return false
        }
    }

    return true
}

const a = {
    name: "Peter",
    surname: "Parker"
};

const b = {
    nickname: "Spiderman", work: "Superhero",
    work: "Superhero",
    suit: "red-blue"
};

const d = {
    name: "Peter",
    surname: "Parker",
};

console.log(comparison(a, d));