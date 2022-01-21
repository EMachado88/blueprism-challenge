// Test

// On click, check if it becomes active

// on retire, check if isRetired

import { mount, shallow } from 'enzyme';

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
})
