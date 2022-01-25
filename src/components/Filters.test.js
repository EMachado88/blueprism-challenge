import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Filters from './Filters'

const setFilteredLogs = jest.fn()
const setSelectedSchedule = jest.fn()
const setScheduleInterval = jest.fn()
const setScheduleQuery = jest.fn()
const setShowRetired = jest.fn()

const intervals = [
  'Second',
  'Minute',
  'Hour',
  'Day',
  'Week',
  'Month'
]

let wrapper

describe('Filters', () => {
  beforeEach(() => {
    wrapper = shallow(<Filters
      intervals={intervals}
      setFilteredLogs={setFilteredLogs}
      setSelectedSchedule={setSelectedSchedule}
      setScheduleInterval={setScheduleInterval}
      setScheduleQuery={setScheduleQuery}
      setShowRetired={setShowRetired}
    />)
  })

  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <Filters
          intervals={intervals}
          setFilteredLogs={setFilteredLogs}
          setSelectedSchedule={setSelectedSchedule}
          setScheduleQuery={setScheduleQuery}
          setScheduleQuery={setScheduleQuery}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Calls setScheduleQuery on input change', () => {
     const input = wrapper.find('#searchQuery')
     input.simulate('change', { target: { value: 'Hello' } })

     expect(setScheduleQuery).toHaveBeenCalledTimes(1)
  })

  it('Calls setScheduleInterval on select change', () => {
    const input = wrapper.find('#interval')
    input.simulate('change', { target: { value: 'Second' } })

    expect(setScheduleInterval).toHaveBeenCalledTimes(1)
 })
})
