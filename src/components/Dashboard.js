import React from 'react';

export const Dashboard = ({title, user, data = {}}) => {
    const { departure, flight, forecast } = data;

    const displayUserName = () => !!user ? user.email : null;

    const displayFlight = () => !!flight ? flight.plane.make : null;

    const displayDeparture = () => !!departure ? departure.date : null;

    const displayForecast = () => !!forecast ? forecast.forecast : null;

    return (
        <div className={'o-dashboard panel panel-default'}>
            <div className={'panel-headding'}>
                <h4>{title}</h4>
                <div className={'user-name'}>
                    <h5>Here is your itinerary:</h5>
                    <span className={'gliphicon glyphicon-user'}
                          aria-hidden={true}
                    >

                    </span>
                    {displayUserName() || <span className={'loading'}>&nbsp;</span>}
                </div>
                <div className={'i-departure'}>
                    <strong>Your Departure:</strong> { displayDeparture() || <span className={'loading'}>&nbsp;</span>}
                </div>
                <div className={'i-flight'}>
                    <strong>Your Flight:</strong> {displayFlight() || <span className={'loading'}>&nbsp;</span>}
                </div>
                <div className={'i-forecast'}>
                    <strong>Weather Forecast:</strong> {displayForecast() || <span className={'loading'}>&nbsp;</span>}
                </div>
            </div>
        </div>
    )
};

