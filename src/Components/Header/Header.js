import React, { Component } from 'react';
import './styles.css';
// import Switch from "react-switch";


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
        return(
                <header className="header">
                    <div className="header__container--title">
                        <p>Find Weather - API</p>
                    </div>
                    <div className="header__container--switch">    
                        {/* <Switch className="handle-switch"
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={30}
                                width={60}
                                onHandleColor={'00BFFF'}
                                offHandleColor={'00BFFF'}
                                boxShadow={undefined}
                                handleDiameter={20}
                                offColor={'transparent'}
                                onColor={'transparent'}
                         /> */}
                    </div>
                </header>
        );
    }
}
