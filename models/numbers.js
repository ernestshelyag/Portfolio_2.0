const db = require('./db');

exports.get = () => {
    if (!db.get('numbers').value()) {
        db.defaults({numbers: []}).write();
    }
    return db.get('numbers').value();
};

exports.update = (findNumber, updateNumber) => {
    db.get('numbers')
        .find({
            number: findNumber
        })
        .assign({
            number: updateNumber
        })
        .write();
};
