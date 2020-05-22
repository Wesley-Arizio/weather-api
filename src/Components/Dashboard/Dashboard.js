import React, { Component } from 'react';
import './styles.css'

export default class Dashboard extends Component{
    render(){
        return(
            <section className="section__container">
                <div className="section__container--input">
                    <input type="text"   className="input--city" placeholder="Type a city name: " />
                    <input type="submit" className="input-submit" name="send" value="SEND" />
                </div>
                
                <section className="section__container--display">
                    <div className="section__container--card">
                        <ul className="card__region">
                            <li>New York</li>
                            <li>United States of America</li>
                        </ul>
                        <div className="card__temperature">
                            <div className="temperature">
                                <span>17 C</span>
                                <span>19 C</span>
                            </div>
                        </div>
                        <div className="card-weather">
                            <span>Sunny</span>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}