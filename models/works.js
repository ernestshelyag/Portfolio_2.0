const db = require('./db');

exports.create = (name, link, path, description) => {
    if (!db.get('works').value()) {
        db.defaults({
                works: []
            })
            .write();
    }

    db.get('works')
        .push({
            name: name,
            link: link,
            src: path,
            description: description
        })
        .write();
};
