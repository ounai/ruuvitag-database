'use strict';

const { getDatabaseConnection } = require('./db');

let logging = false;

const log = (...args) => logging && console.log(...args);

const init = (options = {}) => {
  for (const key of ['dialect', 'host', 'database', 'username', 'password']) {
    if (typeof options[key] !== 'string') {
      throw new Error(`"${key}" missing from options!`);
    }
  }

  if (options.logging === true) {
    logging = true;
  }

  log('Initializing ruuvitag-database...');

  let ruuvi;

  try {
    ruuvi = require('node-ruuvitag');
  } catch (error) {
    console.error('Failed to import node-ruuvitag, is BLE configured correctly?');
    console.error('Error:', error);
  }

  if (ruuvi) {
    log('node-ruuvitag imported successfully!');

    ruuvi.on('found', tag => {
      log('Found tag', tag.id);

      tag.on('updated', async data => {
        log('Received update from tag', tag.id);

        const { RuuviTagData, RuuviTagHistoricalData } = await getDatabaseConnection(options);

        await RuuviTagData.upsert({
          tagId: tag.id,
          ...data
        });

        await RuuviTagHistoricalData.create({
          tagId: tag.id,
          ...data
        });

        log('Update saved to DB!');
      });
    });

    ruuvi.on('warning', message => {
      console.error(new Error(message));
    });
  }
};

module.exports = init;
