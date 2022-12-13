import React from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

//  props parameter is an object which holds all the received attributes as properties
function ExpenseItem(props) {
  // Date is a built in contructor. hence, we are using new keyword
  //   const expenseDate = new Date(2021, 2, 27);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 249.67;

  //   console.log(props.date);

  return (
    <li>
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* event handlers want a function */}
     
    </Card>
    </li>
  );
}

export default ExpenseItem;
