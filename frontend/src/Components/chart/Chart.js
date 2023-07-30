import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { UseGlobalContext } from '../../context/globalContext';
import { DateFormat } from '../../utils/dateFormat';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const getCSSVariableValue = (variableName) => {
  const styles = getComputedStyle(document.documentElement);
  return styles.getPropertyValue(variableName).trim();
};

function Charts() {
  const { incomes, expenses } = UseGlobalContext();

  // Sort incomes by date in ascending order
  const sortedIncomes = [...incomes].sort((a, b) => new Date(a.date) - new Date(b.date));
  const colorSub1 = getCSSVariableValue('--color-sub1');
  const colorSub2 = getCSSVariableValue('--color-sub2');

  const data = {
    labels: sortedIncomes.map((inc) => {
      const { date } = inc;
      return DateFormat(date);
    }),

    datasets: [
      {
        label: 'Income',
        data: sortedIncomes.map((income) => {
          const { amount } = income;
          return amount;
        }),
        backgroundColor: colorSub1,
        tension: 0.5,
      },
      {
        label: 'Expenses',
        data: expenses.map((expense) => {
          const { amount } = expense;
          return amount;
        }),
        backgroundColor: colorSub2,
        tension: 0.5,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
  box-shadow: 5px 5px 5px var(--color-accent);
`;

export default Charts;