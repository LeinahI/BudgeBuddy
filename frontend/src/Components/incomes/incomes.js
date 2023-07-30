import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import IncomeForm from '../form/IncomeForm';
import IncomeItem from '../IncomeItem/incomeItem';

function Incomes() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = UseGlobalContext()

  useEffect(() => {
    getIncomes()
  }, [])

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1 style={{color: 'var(--color-sub1)'}}>My Income</h1>
        <h2 className="total-income">Total Income: <span>₱{totalIncome()}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <IncomeForm />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;
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
    box-shadow: 5px 5px 5px var(--color-accent);
    span{
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--color-sub1);
    }
  }

  .income-content{
    display: flex;
    padding: 1rem;
    gap: 2rem;

    .incomes{
      flex: 1;
      overflow-y: scroll;
      height: 520px;
    }

    .incomes::-webkit-scrollbar {
            display: none;
    }
  }
`;

export default Incomes