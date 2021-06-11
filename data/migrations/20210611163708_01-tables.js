exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name').notNullable()
        table.string('project_description')
        table.boolean('project_completed').defaultTo(0)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name').unique().notNullable()
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed').defaultTo(0)
        table.integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('project_resources', table => {
        table.increments('assignment_id')
        table.integer('resource_id')
            .unsigned()
            .references('resource_id')
            .inTable('resources')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')   
};
