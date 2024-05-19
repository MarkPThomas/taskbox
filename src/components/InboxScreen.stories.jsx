
import { Provider } from 'react-redux';

import store from '../lib/store';

import InboxScreen from './InboxScreen';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};

export const Error = {};
