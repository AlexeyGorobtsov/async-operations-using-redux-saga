export class TravelServiceApi {
    static getUser = () =>
        new Promise((resolve => {
            setTimeout(() =>
                resolve({}, ...{
                    email: "andresmijares@gmail.com",
                    repository: "https://github.com/andresmijares/distributed-async-react-redux-saga"
                }), 3000)
        }));

    static getDeparture = user =>
        new Promise((resolve => {
            setTimeout(() =>
                resolve({}, ...{
                    userID: user.email,
                    flightID: "AR1973",
                    date: "10/27/2016 16:00PM"
                }), 2500)
        }));

    static getFlight = flightID =>
        new Promise((resolve =>
                setTimeout(() =>
                    resolve({}, ...{
                        id: flightID,
                        pilot: "Jhonny Bravo",
                        plane: {
                            make: "Boeing 747 RC",
                            model: "TA-889"
                        },
                        state: "onTime"
                    }), 4500)
        ));

    static getForecast = date =>
        new Promise((resolve) =>
            setTimeout(() =>
                resolve({}, ...{ date: date, forecast: 'rain'}),
            2000)
        )
}