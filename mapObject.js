function mapObject(obj, cb) {
    const mappedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            mappedObj[key] = typeof value === 'string' ? cb(value) : value;
        }
    }
    return mappedObj;
}
module.exports = mapObject;