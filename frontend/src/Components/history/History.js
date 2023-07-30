import React from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../../context/globalContext';
import { peso } from '../../utils/icons';

function History() {
    const { transactHistory } = UseGlobalContext()

    const [...history] = transactHistory()
    return (
        <HistoryStyled>
            <h2>
                Recent History
            </h2>
            {history.map((item) => {
                const { _id, title, amount, type, } = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'var(--color-sub2)' : 'var(--color-sub1)'
                        }}>
                            <b> {title}</b>
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'var(--color-sub2)' : 'var(--color-sub1)'
                        }}> {peso}&nbsp;
                            <b>
                                {
                                    type === 'expense' ? `-${amount}` : `+${amount}`
                                }
                            </b>
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 5px 5px var(--color-accent);
    }
`;

export default History