import React from 'react';
import { connect } from 'react-redux';

import { Dashboard } from '../components/Dashboard';
import { Mixin } from './CustomMixin';

const Panel = props => (
    <div className={'col-md-4'}>
        <Dashboard title={'Panel Non Sequenced Non Blocking'}
                   user={props.user}
                   data={props.dashboard3}
        />
    </div>
);

const PanelMixed3 = Mixin(Panel);

const mapStateToProps = state => ({
   user: state.user,
   dashboard3: state.dashboard3
});

const mapDispatchToProps = dispatch =>({
    loadDashboard: () => dispatch({type: 'LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING'})
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelMixed3);