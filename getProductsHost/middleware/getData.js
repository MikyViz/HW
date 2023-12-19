const getData = async (req, res, next) => {
    const response = await fetch('https://dummyjson.com/products');
    if (response.status < 300 && response.status >= 200) {
        data = await response.json();
        req.data = data
        next();
    } else {
        console.log(`not so fast man...${respons.status}`);
    }
}

module.exports = getData;