const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    db.exec(`
        CREATE TABLE IF NOT EXITIS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTIS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );

    `)
}
