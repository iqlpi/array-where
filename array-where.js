Array.prototype.where = function (filter) {
    let result = [];
    this.forEach(function (item) {
        if (filter(item)) {
            result.push(item);
        }
    });
    return result;
}
