//vamos a definir la estructura , el esquema (propiedades con tipos de datos). Similar a la tabla de mysql:

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expensesSchema = new Schema(
  {
    month: { type: String, require: true },
    bills: { type: Number, require: true },
    groceries: {
      type: Number,
      require: true,
      min: 100,
    },
    gym: { type: Number },
    luxuries: { type: Number, require: true },
    rent: { type: Number, require: true },
    restaurants: { type: Number },
    selfCare: { type: Number },
    transport: { type: Number, require: true },
  },

  { collection: "expenses" }
);

const Expenses = mongoose.model("Expenses", expensesSchema);
module.exports = Expenses;
