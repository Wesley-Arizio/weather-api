import React, { Component } from 'react';
import './styles.css';


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
                </header>
        );
    }
}
