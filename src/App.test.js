import renderer from 'react-test-renderer'

import App from './App'

test('Renders App correctly', () => {
  const tree = renderer
    .create(
      <App />,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
});
