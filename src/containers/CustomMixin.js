import React, {Component} from 'react';

export const Mixin = InnerComponent => class extends Component {
    componentDidMount() {
        this.props.loadDashboard();
    }

    render() {
      return (
          <InnerComponent
              {...this.state}
              {...this.props}
          />
      )
    }
};