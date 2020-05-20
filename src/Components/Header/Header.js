import React, { Component } from 'react';
import styled from 'styled-components';
import Switch from "react-switch";


 export default class Header extends Component{
     constructor(){
        super();
        this.state = {
            checked: false,
            uncheckedIcon: false,
            checkedIcon: false
        };
        this.handleChange = this.handleChange.bind(this);
     }  
     handleChange(checked, uncheckedIcon, checkedIcon) {
         console.log(this.state);
         this.setState({ checked, uncheckedIcon, checkedIcon });
     }
    render(){
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
            padding: 50px 25px 0 25px;
            
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        const HeaderSwitch = styled.div`
            .handle-switch{
                width: 30 ;
                height: 50 ;
                border: 1px solid #35AFFC;
            }
        `;
        const HeatherTitle = styled.div`
            h3{
                font-family: 'Montserrat';
                font-size: 26px;
                letter-spacing: 6px;
                color: #47525E;
            }
        `;
    
        return(
            <Header>
                <HeaderContainer>
                    <HeatherTitle>
                        <h3 size={10}>Find Weather - API</h3>
                    </HeatherTitle>
                    <HeaderSwitch>
                        <Switch className="handle-switch"
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={65}
                                width={125}
                                handleDiameter={50}
                                offHandleColor={'#35AFFC'}
                                offColor={'transparent'}

                        ></Switch>
                    </HeaderSwitch>
                </HeaderContainer>
            </Header>
        );
    }
}
