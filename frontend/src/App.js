import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from './styles/layouts'
import Orb from './Components/orb/Orb'
import React, { useState, useMemo } from "react";
import Navigation from './Components/navigation/navigation'
import Dashboard from "./Components/dashboard/dashboard";
import Income from "./Components/incomes/incomes";
import Expenses from "./Components/expenses/expenses";
import { UseGlobalContext } from "./context/globalContext";


function App() {
  const [active, setActive] = React.useState(1)

  const global = UseGlobalContext()
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
