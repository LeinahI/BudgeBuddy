import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';

function expenses() {
  return (
    <ExpensesStyled>
      <InnerLayout>
      <h1>My Expenses</h1>
      </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`

`;

export default expenses