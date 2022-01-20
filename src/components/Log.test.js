import renderer from 'react-test-renderer'

import Log from './Log'

test('Renders Log correctly', () => {
  const log = {
    'id': 10375504,
    'startTime': '2021-09-16T20:48:39.953Z',
    'endTime': '2021-06-20T11:32:36.774Z',
    'status': 'Completed',
    'serverName': 'laborum est dolore',
    'scheduleId': 87584078
  }

  const component = renderer.create(
    <Log log={log} />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
