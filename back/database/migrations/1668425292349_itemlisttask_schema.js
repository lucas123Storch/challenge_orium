'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItemListTaskSchema extends Schema {
  up() {
    this.create('item_list_tasks', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'));
      table.boolean('status').defaultTo(1);
      table.datetime('deleted_at');
      table.timestamps();

      table.string('title');

      table.string('description');

      table.string('listId');
    });
  }

  down() {
    this.drop('item_list_tasks');
  }
}

module.exports = ItemListTaskSchema;
