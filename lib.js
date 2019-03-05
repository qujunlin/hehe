const addOne = (origin) => origin + 1;
module.exports = addOne;
const subOne = (origin) => origin - 1;

const lib = {
    addOne,
    subOne,
}

module.exports = lib;