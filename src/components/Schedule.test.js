import { mount } from 'enzyme';

import Schedule from './Schedule'

const props = {
  schedule: {
    name: 'Random Schedule Name (0.28726633985396344)',
    description: 'sunt et',
    id: 87584078,
    isRetired: true,
    tasksCount: 2,
    intervalType: 'Minute'
  },
  handleClickSchedule: jest.fn(),
  selectedSchedule: 0,
  toggleIsRetired: jest.fn()
}

describe('Schedule', () => {
  it('Calls handleClickSchedule on click', () => {
     const wrapper = mount(<Schedule {...props} />)

     wrapper.simulate('click')
     expect(props.handleClickSchedule).toHaveBeenCalledTimes(1)
 })

 it('Calls toggleIsRetired on retire/unretire button', () => {
  const button = mount(<Schedule {...props} />)
    .find('button')

  button.simulate('click')
  expect(props.toggleIsRetired).toHaveBeenCalledTimes(1)
})
})
