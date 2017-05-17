'use strict';

import express from 'express';
import confStack from 'conf-stack';
import sequelize from 'sequelize';

const app = express();
const config = confStack();

app.listen('8080', () => {
  console.log('Server start');
});
