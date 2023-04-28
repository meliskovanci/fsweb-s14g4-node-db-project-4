/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name").notNullable().unique();
      
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name").notNullable().unique();
      tbl.integer("ingredient_unit").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("step_text").notNullable();
      tbl.integer("step_order").notNullable();
      tbl.integer("recipe_id").unsigned().notNullable().references("recipe_id").inTable("recipes");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.integer("step_id").unsigned().notNullable().references("step_id").inTable("steps");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients");
      tbl.primary(["step_id", "ingredient_id"]);
      tbl.integer("quantity").notNullable();
    });
};
  


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
  
};
