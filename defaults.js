function defaults(obj, defaultProps) {
    for (const key in defaultProps) {
        if (defaultProps.hasOwnProperty(key) && obj[key] === undefined) {
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

exports.defaults = defaults;