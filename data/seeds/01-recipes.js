/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex("ingredients").truncate();
    await knex("steps").truncate();
    await knex("step_ingredients").truncate();
    await knex("recipes").truncate();
    await knex("recipes").insert([
        {recipe_name: "Bolenez Makarna"},
        {recipe_name: "Kremalı Makarna"},
        {recipe_name: "Peynirli Makarna "}
    ]);
  
    
    
    await knex("ingredients").insert([
      {
        ingredient_name: "su",
        ingredient_unit: "gram",
      },
      {
        ingredient_name: "makarna",
        ingredient_unit: "gram",
      },
      {
        ingredient_name: "Zeytinyağ",
        ingredient_unit: "yemek kaşığı",
      },
      {
        ingredient_name: "Soğan",
        ingredient_unit: "adet",
      },
      {
        ingredient_name: "kıyma",
        ingredient_unit: "gram",
      },
      {
        ingredient_name: "tuz",
        ingredient_unit: "yemek kaşığı",
      },
     
      {
        ingredient_name: "krema",
        ingredient_unit: "adet",
        
      },
      {
        ingredient_name: "peynir",
        ingredient_unit: "gram",
      },
    ]);
    
    await knex("steps").insert([
      {
        step_order: 1,
        step_text: "Tencereye su koy ve kaynat",
        recipe_id: 1,
      },
      {
        step_order: 2,
        step_text: "Makarnaları ekle",
        recipe_id: 1,
      },
      
      {
        step_order: 3,
        step_text: "Tavaya zeytinyağ koy",
        recipe_id: 1,
      },
      {
        step_order: 4,
        step_text: "Soğanı kavur",
        recipe_id: 1,
      },
      {
        step_order: 5,
        step_text: "Kıymayı ekle",
        recipe_id: 1,
      },
      {
        step_order: 6,
        step_text: "tuz dök",
        recipe_id: 1,
      },
      {
        step_order: 5,
        step_text: "kremayı ekle",
        recipe_id: 2,
      },
      
      {
        step_order: 5,
        step_text: "peyniri ekle",
        recipe_id: 3,
      },
     
    ]);
    
    await knex("step_ingredients").insert([
      {
        step_id: 1,
        ingredient_id: 1,
        quantity: 500,
      },
      {
        step_id: 2,
        ingredient_id: 2,
        quantity: 500,
      },
      {
        step_id: 3,
        ingredient_id: 3,
        quantity: 5,
      },
      {
        step_id: 4,
        ingredient_id: 4,
        quantity: 1,
      },
      {
        step_id: 5,
        ingredient_id: 5,
        quantity: 300,
      },
      {
        step_id: 6,
        ingredient_id: 6,
        quantity: 1,
      },
      {
        step_id: 7,
        ingredient_id: 7,
        quantity: 1,
      },
      {
        step_id: 8,
        ingredient_id: 8,
        quantity: 300,
      },
    ]);
  };
  
  
  