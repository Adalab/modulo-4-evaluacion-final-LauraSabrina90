const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("../config/myConnection");
const Expenses = require("./models/expenses.models");

const myServer = express();

myServer.use(cors());
myServer.use(express.json());

connectDb();

const myPort = process.env.PORT || 3306;
myServer.listen(myPort, () => {
  console.log(
    `Thanks Gandalf my server is live at http://localhost:${myPort}/`
  );
});

myServer.get("/getExpenses", async (req, res) => {
  const myExpenses = await Expenses.find(req.param);
  res.status(200).json({ message: "Todos los gastos existentes", myExpenses });
});

myServer.post("/createExpense", async (req, res) => {
  const newExpenses = await Expenses.create(req.body);

  try {
    res
      .status(200)
      .json({ message: "Se han añadido nuevos gastos", newExpenses });
  } catch (e) {
    res.status(500).json({
      message: "Error interno al crear los nuevos gastos",
      e: error.message,
    });
  }
});

//Leer registros filtrado por el campo de tu interés.
myServer.get("/filterExpenses/:_id", async (req, res) => {

try {
const { _id } = req.params;
const mongoQuery = await Expenses.findOne({_id });

if(mongoQuery) {
return res.status(200).json({
  message: "Hay una coincidencia para esta búsqueda",
  mongoQuery,
});

} else {
  return res.status(404).json({
    message: "No se encontraron resultados con esta búsqueda",
  });
}

} catch (error) {
  return res.status(500).json({
    message: "Error interno al filtrar los resultados",
    error: error.message,
  });
 }
});

myServer.put("/updateOneExpense", async (req, res) => {
  try {
    const updateBills = req.body.bills;
    const updateExpense = await Expenses.findByIdAndUpdate(
      { _id: req.body._id },
      { $set: { bills: updateBills } },
      { new: true }
    );

    if (updateExpense) {
      return res.status(200).json({
        message: "Gasto actualizado",
        updateExpense,
      });
    } else {
      return res.status(404).json({
        message: "No se encontraron gastos que coincidan para actualizar",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error interno al actualizar los gastos",
      error: error.message,
    });
  }
});

//Eliminar un registro existente.
