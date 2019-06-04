import React from 'react';
import {connect} from 'react-redux';

import { Dashboard } from '../components/Dashboard';
import { Mixin } from './CustomMixin';

const Panel = props => (
    <div className={'col-md-4'}>
        <Dashboard title={'Panel Non Sequenced'}
                   user={props.user}
                   data={props.dashboard2}
        />
    </div>
);

const PanelMixed2 = Mixin(Panel);

const mapStateToProps = state =>
    ({
        user: state.user,
        dashboard2: state.dashboard
    });

const mapDispatchToProps = dispatch =>
    ({
        loadDashboard: () =>
            dispatch({type: 'LOAD_DASHBOARD_NON_SEQUENCED'})
    });

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed2);