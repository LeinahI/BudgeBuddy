import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';

function dashboard() {
  return (
    <DashboardStyled>
      <InnerLayout>
      <h1>Dashboard</h1>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

`;

export default dashboard