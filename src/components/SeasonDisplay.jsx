import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: "hello"};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState = ({
                    lat: position.coords.latitude
                });
                console.log("Latitude: ", this.state.lat);                
            },
            (error) => console.log(error) 
        );
    }

    render() {
        const lat = this.state.lat;
        console.log(this.state.lat)
        return (
            <div>
                <h4>Season Display Componenet Response: </h4>
                Updated Latitude: {lat}
            </div>
        ) 
    }
}

export default SeasonDisplay;