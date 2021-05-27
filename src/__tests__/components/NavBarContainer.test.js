import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import NavBarContainer from '../../containers/NavBarContainer';
import store from '../../store';

test('NavBar Component renders properly', () => {
  render(
    <Provider store={store}>
      <NavBarContainer />
    </Provider>,
  );
  screen.findAllByText('NEW YORK');
});
