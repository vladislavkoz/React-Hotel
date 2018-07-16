import React, {Component} from 'react';
import Apartment from './Apartment';
import './Apartments.css';
import Filter from "./Filter";

class Apartments extends Component {
    state = {
        apartments: [
            {accommodationType: 'SGL', comfortType: 'LUX'},
            {accommodationType: 'DGL', comfortType: 'ECONOM'},
            {accommodationType: 'DGL', comfortType: 'STANDART'},
            {accommodationType: 'SGL', comfortType: 'ECONOM'},
            {accommodationType: 'SGL', comfortType: 'STANDART'},
            {accommodationType: 'DGL', comfortType: 'LUX'}
        ]
    };

    render() {
        return (
            <div className={"container"}>
                <Filter/>
                <hr/>
                <div className={'cards-Container'}>
                    <Apartment
                        accommodation={this.state.apartments[0].accommodationType}
                        comfort={this.state.apartments[0].comfortType}
                    />
                    <Apartment
                        accommodation={this.state.apartments[1].accommodationType}
                        comfort={this.state.apartments[1].comfortType}
                    />
                    <Apartment
                        accommodation={this.state.apartments[2].accommodationType}
                        comfort={this.state.apartments[2].comfortType}
                    />
                    <Apartment
                        accommodation={this.state.apartments[3].accommodationType}
                        comfort={this.state.apartments[3].comfortType}
                    />
                    <Apartment
                        accommodation={this.state.apartments[4].accommodationType}
                        comfort={this.state.apartments[4].comfortType}
                    />
                    <Apartment
                        accommodation={this.state.apartments[5].accommodationType}
                        comfort={this.state.apartments[5].comfortType}
                    />
                </div>
            </div>

        );
    }

}

export default Apartments;