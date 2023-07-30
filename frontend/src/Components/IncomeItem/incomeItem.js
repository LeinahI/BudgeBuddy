import React from 'react'
import styled from 'styled-components'
import { DateFormat } from '../../utils/dateFormat';
import { allowance, business, calendar, care, clothing, comment, donate, educ, entertainment, ewallet, food, freelance, gambling, gas, gifts, money, otherExpense, otherIncome, peso, sim, stocks, transpo, trash } from '../../utils/icons';
import Button from '../button/button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    /* const formatDate = (dateFull) => {
        const dateSetting = { month: 'long', day: '2-digit', year: 'numeric' };
        return new Date(dateFull).toLocaleDateString('en-US', dateSetting);
    }; */

    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks;
            case 'business':
                return business;
            case 'allowance':
                return allowance;
            case 'gifts':
                return gifts;
            case 'gambling':
                return gambling;
            case 'others':
                return otherIncome;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'clothing':
                return clothing;
            case 'donation':
                return donate;
            case 'educational':
                return educ;
            case 'entertainment':
                return entertainment;
            case 'food':
                return food;
            case 'gas':
                return gas;
            case 'care':
                return care;
            case 'sim':
                return sim;
            case 'transportation':
                return transpo;
            case 'ewallet':
                return ewallet;
            case 'others':
                return otherExpense;
            default:
                return ''
        }
    }

    console.log('type: ', type);

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'income' ? categoryIcon() : expenseCatIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{peso} {amount}</p>
                        <p>{calendar} {/* formatDate(date) */DateFormat(date)}</p>
                        <p>{comment} {description}</p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-purple)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 99%;
    color: var(--color-sub3);
    box-shadow: 5px 5px 5px var(--color-accent);
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        i{
            font-size: 2.6rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default IncomeItem