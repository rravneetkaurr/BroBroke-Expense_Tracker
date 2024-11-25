const transactionModel = require("../models/transactionModel");
const moment = require("moment");
const excel = require("exceljs");

const getAlltransaction = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

const deletetransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const edittransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addtransaction = async (req, res) => {
  try {
    const newtransaction = new transactionModel(req.body);
    await newtransaction.save();
    res.status(201).send("transaction Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const exportMonthlyReport = async (req, res) => {
  try {
    const currentDate = moment();
    const lastMonthStartDate = currentDate.clone().subtract(1, 'months').startOf('month');
    const todayEndDate = currentDate.endOf('day');

    const { userid } = req.body;

    const lastMonthTransactions = await transactionModel.find({
      date: { $gte: lastMonthStartDate.toDate(), $lte: todayEndDate.toDate() },
      userid: userid,
    });

    if (lastMonthTransactions.length === 0) {
      return res.status(404).json({ message: "No transactions found for the last month." });
    }

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Last Month Report");

    // Add headers
    worksheet.addRow(["Date", "Type", "Amount", "Category"]);

    // Add data rows
    lastMonthTransactions.forEach((transaction) => {
      worksheet.addRow([
        moment(transaction.date).format("YYYY-MM-DD"),
        transaction.type,
        transaction.amount,
        transaction.category,
      ]);
    });

    // Set the response headers
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", `attachment; filename=last_month_report.xlsx`);

    // Pipe the workbook to the response
    workbook.xlsx.write(res).then(() => {
      res.end();
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAlltransaction,
  addtransaction,
  edittransaction,
  deletetransaction,
  exportMonthlyReport,
};
