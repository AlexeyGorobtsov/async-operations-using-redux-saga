import React, { Component } from 'react';

export class App extends Component {
    render() {
        return (
            <div className={'container-fluid'}>
                <div className={'container'}>
                    <div className={'row'}>
                        {this.props.panel}
                        {this.props.panel2}
                        {this.props.panel3}
                        <a href={'https://github.com/andresmijares/async-redux-saga'} target='_new'>
                            Check the repo here
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}