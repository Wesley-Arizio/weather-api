import React from 'react';
import styled from 'styled-components';

import title from '../../assets/fonts.css'

export default function Header(){

    const Header = styled.header`
        height: 100px;
        
        display: flex;
        justify-content: center;
        align-content: center;
    `;

    const HeaderContainer = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        width: 100%;
        height: 100%;
        padding: 0 20px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        div h3{
            font-family: 'Montserrat';
            font-size: 20px;
            letter-spacing: 6px;
            color: #47525E;
        }

    `;
    


    return(
        <Header>
            <HeaderContainer>
                <div>
                    <h3>Find Weather API</h3>
                </div>
                <div>
                    <p value={title}></p>
                </div>
                
            </HeaderContainer>
        </Header>
    );
}
