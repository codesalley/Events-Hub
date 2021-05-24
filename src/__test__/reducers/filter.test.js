import filterReducer from '../../reducers/filter';

test('takes in user filter option and replace it with the current option in redux store', () => {
  const res = filterReducer('ALL', { type: 'MY_FILTER', payload: { code: 'NY' } });
  expect(res).toBe('NY');
});
