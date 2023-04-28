
const db = require("../../data/db-config");

function getRecipes() {
  return db("recipes");
}

async function getRecipeById(recipe_id) {
  const data = await db("recipes as r")
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as si", "si.step_id", "st.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "st.step_id",
      "st.step_order",
      "st.step_text",
      "i.ingredient_id",
      "i.ingredient_name",
      "si.quantity"
    )
    .orderBy("st.step_order", "asc")
    .orderBy("i.ingredient_id", "asc")
    .where("r.recipe_id", recipe_id);

  const result = {
    recipe_id: data[0].recipe_id,
    recipe_name: data[0].recipe_name,
    created_at: data[0].created_at,
    steps: [],
  };

  data.forEach((obj) => {
    if (obj.step_id) {
      result.steps.push({
        step_id: obj.step_id,
        step_order: obj.step_order,
        step_text: obj.step_text,
        ingredients: [
          {
            ingredient_id: obj.ingredient_id,
            ingredient_name: obj.ingredient_name,
            quantity: obj.quantity,
          },
        ],
      });
    }
  });

  return result;
}

module.exports = { getRecipes, getRecipeById };