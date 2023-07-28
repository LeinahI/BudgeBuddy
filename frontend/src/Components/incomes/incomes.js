import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import Form from '../form/form';
import IncomeItem from '../IncomeItem/incomeItem';

function Incomes() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = UseGlobalContext()

  useEffect(() => {
    getIncomes()
  }, [])

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>My Incomes</h1>
        <h2 className="total-income">Total Income: <span>₱{totalIncome()}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } = income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-income{
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
    span{
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--color-green);
    }
  }

  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
`;

export default Incomes