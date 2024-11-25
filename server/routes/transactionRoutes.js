const express = require("express");
const {
  addtransaction,
  getAlltransaction,
  edittransaction,
  deletetransaction,
  exportMonthlyReport,
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST MEthod
router.post("/add-transaction", addtransaction);
//Edit transaction POST MEthod
router.post("/edit-transaction", edittransaction);
//Delete transaction POST MEthod
router.post("/delete-transaction", deletetransaction);

//get transactions
router.post("/get-transaction", getAlltransaction);

//get monthly transaction in excel
router.post("/export-monthlyReport", exportMonthlyReport);


module.exports = router;
