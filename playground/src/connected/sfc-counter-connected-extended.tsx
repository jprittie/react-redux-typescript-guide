import { connect } from 'react-redux';

import { RootState } from '@src/redux';
import { actions, CountersSelectors } from '@src/redux/counters';
import { SFCCounter } from '@src/components';

export interface SFCCounterConnectedExtended {
  initialCount: number;
}

const mapStateToProps = (state: RootState, ownProps: SFCCounterConnectedExtended) => ({
  count: CountersSelectors.getReduxCounter(state) + ownProps.initialCount,
});

export const SFCCounterConnectedExtended = connect(mapStateToProps, {
  onIncrement: actions.increment,
})(SFCCounter);
