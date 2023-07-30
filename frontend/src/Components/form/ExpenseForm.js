import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { UseGlobalContext } from '../../context/globalContext';
import Button from '../button/button';
import { plus } from '../../utils/icons';

function ExpenseForm() {
    const { addExpense, error, setError } = UseGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: "",
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    id="title"
                    type="text"
                    value={title}
                    name={'title'}
                    maxLength={20}
                    /* required */
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    type="number"
                    value={amount}
                    maxLength={15}
                    /* required */
                    name={'amount'}
                    placeholder="Expense Amount"
                    autocomplete="off"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <div className="customDatePickerWidth">
                    <DatePicker
                        id='date'
                        placeholderText='Enter the Date'
                        autoComplete='off'
                        selected={date}
                        /* required */
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                            setInputState({ ...inputState, date: date })
                        }}
                    />
                </div>
            </div>

            <div className="selects input-control">
                <select /* required */ value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="clothing">Clothing & Accessories</option>
                    <option value="donation">Donations</option>
                    <option value="educational">Educational Misc.</option>
                    <option value="entertainment">Entertainment & Recreation</option>
                    <option value="food">Food</option>
                    <option value="gas">Gas</option>
                    <option value="care">Personal Care</option>
                    <option value="sim">SIM Load</option>
                    <option value="transportation">Transportation</option>
                    <option value="ewallet">Wallet App Load</option>
                    <option value="others">Others</option>
                </select>
            </div>

            <div className="input-control">
                <textarea name="description" value={description} /* required */
                    placeholder='Add Description' id='description'
                    cols="30" maxLength={50} rows="4" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
                <Button
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
            {error && <h4 className='error'>{error}</h4>}
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    #title{
        margin-top: 10px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
         margin: 0;
    }
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        resize: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
        color: rgba(34, 34, 36, 1);
        &::placeholder{
            color: rgba(34, 34, 96, .6);
        }
    }

    .input-control{
        input{
            width: 100%;
        }
    }

    .customDatePickerWidth, .customDatePickerWidth > div.react-datepicker-wrapper, 
    .customDatePickerWidth > div > div.react-datepicker__input-container
    .customDatePickerWidth > div > div.react-datepicker__input-container input {
        width: 100%;
    }
    
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            width: 100%;
            color: rgba(34, 34, 96, .6);
            &:focus, &:active{
                color: rgba(34, 34, 36, 1);
            }
            cursor: pointer;
        }
    }

    .submit-btn{
        button{
            width: 100%;
            box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
            &:hover{
                background: var(--color-sub2) !important;
            }
        }
    }
`;

export default ExpenseForm