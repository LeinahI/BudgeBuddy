import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import ExpenseForm from '../form/ExpenseForm';
import IncomeItem from '../IncomeItem/incomeItem';

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } = UseGlobalContext()

  useEffect(() => {
    getExpenses()
  }, [])

  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1 style={{color: 'var(--color-sub2)'}}>My Expenses</h1>
      <h2 className="total-expense">Total Expenses: <span>₱{totalExpenses()}</span></h2>
      <div className="expense-content">
        <div className="form-container">
          <ExpenseForm />
        </div>
        <div className="expenses">
          {expenses.map((expense) => {
            const { _id, title, amount, date, category, description, type } = expense;
            return <IncomeItem
              key={_id}
              id={_id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              indicatorColor="var(--color-purple)"
              deleteItem={deleteExpense}
            />
          })}
        </div>
      </div>
    </InnerLayout>
    </ExpensesStyled >
  )
}

const ExpensesStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-expense{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #fff;
    box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem;
    font-size: 2rem;
    gap: .5rem;
    box-shadow: 5px 5px 5px var(--color-accent);
    span{
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--color-sub2);
    }
  }

  .expense-content{
    display: flex;
    padding: 1rem;
    gap: 2rem;

    .expenses{
      flex: 1;
      overflow-y: scroll;
      height: 520px;
    }

    .expenses::-webkit-scrollbar {
            display: none;
    }
    
  }
`;

export default Expenses