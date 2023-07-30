import React from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../../context/globalContext'
import avatar from '../../img/avatar.png'
import { peso } from '../../utils/icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({ active, setActive }) {
    const { totalBalance } = UseGlobalContext()

    return (
        <NavStyled>
            <div className='user-con'>
                <img src={avatar} alt="avatar" />
                <div className='text'>
                    <h2>Leinah</h2>
                    <p>Your money {peso} {totalBalance()} </p>
                </div>
            </div>
            <ul className='menu-items'>
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: var(--primary-color);
        }
        p{
            color: var(--color-sub2);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: var(--primary-color);
            padding-left: 1rem;
            position: relative;
            i{
                color: var(--primary-color);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: var(--color-sub1) !important;
        i{
            color: var(--color-sub1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: var(--color-sub1);
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation