import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import AppContainer from '../../containers/AppContainer';
import store from '../../store/index';

test('App to render properly', () => {
  render(
    <Provider store={store}>

      <AppContainer />
    </Provider>,
  );
  screen.findAllByText('events hub');
});
