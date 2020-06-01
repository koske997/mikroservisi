import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';
import axios from '../axios-objects';


class HomePage extends React.PureComponent {

    loginHandler = async (event) => {
        event.preventDefault();
    
        const response = await axios.get('/search-car-sevice/login');
        if(response){
            console.log(response);
        }

    }    

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-container">
                    <div className="container-content">
                        <h1>Dobrodosli na web servis bezbednosti</h1>
                        <p>Ovde se nalaze primeri odbrane od savremenih sajber napada</p>
                        <button onClick={(event) => {this.loginHandler(event); }}>POSALJI ZAHTEV</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;