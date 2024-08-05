import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare("Select * From meals").all();
}

// // Dann müssen wir das nur noch ausführen, das macht man eigentlich nicht mit der run-Methode hier,
// sondern mit der all-Methode. Run wird verwendet, wenn Sie Daten einfügen, z. B. wenn Sie Daten ändern,
// all wird verwendet, wenn Sie Daten abrufen und alle Zeilen, die durch diese Anweisung abgerufen wurden,
// zurückbekommen wollen. Wenn Sie nach einer einzelnen Zeile suchen, können Sie stattdessen get verwenden.

export function getMeal(slug) {
  return db.prepare("Select * From meals WHERE slug == ?").get(slug);
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
