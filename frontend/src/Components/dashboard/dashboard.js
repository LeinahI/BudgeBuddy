import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import { peso } from '../../utils/icons';
import Charts from '../chart/Chart';
import History from '../history/History';

function Dashboard() {
  const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = UseGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])

  const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0;
  const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0;

  const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0;
  const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0;

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1 style={{color: 'var(--color-sub3)'}}>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Charts />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {peso} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p>
                  {peso} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {peso} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">Min <span>Income</span>Max</h2>
            <div className="salary-item">
              <p style={{color: 'var(--color-sub1)'}}>
                {peso} {minIncome}
              </p>
              <p style={{color: 'var(--color-sub2)'}}>
                {peso} {maxIncome}
              </p>
            </div>
            <h2 className="salary-title">Min <span>Expense</span>Max</h2>
            <div className="salary-item">
              <p style={{color: 'var(--color-sub1)'}}>
                {peso} {minExpense}
              </p>
              <p style={{color: 'var(--color-sub2)'}}>
                {peso} {maxExpense}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  .stats-con{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con{
      grid-column: 1 / 4;
      height: 400px;
      .amount-con{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income p {
          color: var(--color-sub1);
        }
        .income, .expense{
          grid-column: span 2;
        }
        .expense p {
          color: var(--color-sub2);
        }
        .income, .expense, .balance{
          background: #fcf6f9;
          border: 2px solid #fff;
          box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          box-shadow: 5px 5px 5px var(--color-accent);
          p{
            font-size: 3.5rem;
            font-weight: 700;
          }
        }
        .balance{
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p{
            color: var(--color-sub3);
            opacity: 1;
            font-size: 4.5rem;
          }
        }
      }
    }
    .history-con{
      grid-column: 4 / -1;
      h2{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title{
        font-size: 1.2rem;
        span{
          font-size: 1.8rem;
        }
      }
      .salary-item{
        background: #fcf6f9;
        border: 2px solid #fff;
        box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 5px 5px var(--color-accent);
        p{
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard