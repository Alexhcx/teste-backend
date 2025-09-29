import 'dotenv/config.js';

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
};

const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
};

const production = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true,
  },
};

export default {
  development,
  test,
  production,
};