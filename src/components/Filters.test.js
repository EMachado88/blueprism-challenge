import { shallow } from 'enzyme';

import Filters from './Filters'

const setScheduleQuery = jest.fn()

describe('Filters', () => {
  it('Calls setScheduleQuery on input change', () => {
     const filters = shallow(<Filters setScheduleQuery={setScheduleQuery} />)

     const input = filters.find('input')
     input.simulate('change', { target: { value: 'Hello' } })

     expect(setScheduleQuery).toHaveBeenCalled()
 })
})
