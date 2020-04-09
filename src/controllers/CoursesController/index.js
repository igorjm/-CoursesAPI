const connection = require('../../database/connection');

module.exports = {
  async index(req, res, next) {
    var sql = 'select * from course';
    var params = [];
    connection.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows,
      });
    });
  },

  async indexById(req, res, next) {
    var sql = 'select * from course where id = ?';
    var params = [req.params.id];
    connection.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row,
      });
    });
  },

  async create(req, res, next) {
    var errors = [];

    if (!req.body.title) {
      errors.push('No Title specified');
    }

    if (!req.body.hours) {
      errors.push('Minimum hours needed');
    }

    if (errors.length) {
      res.status(400).json({ error: errors.join(',') });
      return;
    }

    var data = {
      title: req.body.title,
      description: req.body.description,
      hours: req.body.hours,
      value: req.body.value,
    };

    console.log('req.body', req.body);

    var sql =
      'INSERT INTO course (title, description, hours, value) VALUES (?,?,?,?)';

    var params = [data.title, data.description, data.hours, data.value];

    connection.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: data,
        id: this.lastID,
      });
    });
  },

  async update(req, res, next) {
    var data = {
      title: req.body.title,
      description: req.body.description,
      hours: req.body.hours,
      value: req.body.value,
    };

    connection.run(
      `UPDATE course set 
         title = COALESCE(?,title), 
         description = COALESCE(?,description), 
         hours = COALESCE(?,hours),
         value = COALESCE(?,value)
         WHERE id = ?`,

      [data.title, data.description, data.hours, data.value, req.params.id],

      function (err, result) {
        if (err) {
          res.status(400).json({ error: res.message });
          return;
        }
        res.json({
          message: 'success',
          data: data,
          changes: this.changes,
        });
      }
    );
  },

  async delete(req, res, next) {
    connection.run('DELETE FROM course WHERE id = ?', req.params.id, function (
      err,
      result
    ) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: 'deleted', changes: this.changes });
    });
  },
};
