const users = [
  { name: 'Michael Jackson' },
  { name: 'Marilyn Monroe' },
  { name: 'Bruce Willis' },
  { name: 'Angelina Jolie' },
  { name: 'Mr.Thunder' },
  { name: 'Eddie Hall' },
  { name: 'Nikki Lauda' },
  { name: 'James Hunt' },
  { name: 'Joe Biden' },
];

exports.users = users;

exports.seed = function (knex) {
  return knex('users').insert(users);
};
