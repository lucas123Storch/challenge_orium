'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TodoListsSchema extends Schema {
  up() {
    this.create('todo_lists', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'));
      table.boolean('status').defaultTo(1);
      table.datetime('deleted_at');
      table.timestamps();

      table.string('listName');

      table.string('creator');

      table.string('tasks');
    });
  }

  down() {
    this.drop('todo_lists');
  }
}

module.exports = TodoListsSchema;
