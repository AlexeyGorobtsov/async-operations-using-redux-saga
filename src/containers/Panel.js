import React from 'react';
import {connect} from 'react-redux';

import { Dashboard } from '../components/Dashboard';
import { Mixin } from './CustomMixin';

const Panel = props => (
    <div className={'col-md-4'}>
        <Dashboard
            title={'Panel Sequenced'}
            user={props.user}
            data={props.dashboard}
        />
    </div>
);

const PanelMixed = Mixin(Panel);

const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user,
        dashboard: state.dashboard
    };
}

const mapDispatchToProps = dispatch => ({
  loadDashboard: () => {
      return dispatch({ type: 'LOAD_DASHBOARD' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed);