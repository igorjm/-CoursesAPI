var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

let connection = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    connection.run(
      `CREATE TABLE course (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            description text UNIQUE, 
            hours text, 
            value text
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            'INSERT INTO course (title, description, hours, value) VALUES (?,?,?)';
          connection.run(insert, [
            'Javascript',
            'A course about Javascript',
            '48',
            'R$20',
          ]);
          connection.run(insert, [
            'AngularJS',
            'A course about AngularJS',
            '24',
            'R$10',
          ]);
        }
      }
    );
  }
});

module.exports = connection;
