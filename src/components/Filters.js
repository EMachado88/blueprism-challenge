import { useState } from "react"

const Filters = ({
  intervals,
  setScheduleQuery,
  setScheduleInterval,
  setFilteredLogs,
  setSelectedSchedule,
  setShowRetired,
  setShowUnretired
}) => {
  // Retired state
  const [isRetired, setIsRetired] = useState(true)
  const [isUnretired, setIsUnretired] = useState(true)

  // Reset/unselect schedule
  const resetSelectedSchedule = () => {
    setFilteredLogs([])
    setSelectedSchedule(0)
  }

  // Handler for search by name or description
  const handleChangeQuery = (event) => {
    setScheduleQuery(event.target.value)
    resetSelectedSchedule()
  }

  // Handler for interval type change
  const handleChangeInterval = (event) => {
    setScheduleInterval(event.target.value)
    resetSelectedSchedule()
  }

  // Handler for retired and unretired checkboxes
  const handleRetiredChange = (event) => {
    switch (event.target.id) {
      case 'retired':
        setIsRetired(event.target.checked)
        setShowRetired(event.target.checked)
        break;

      case 'unretired':
        setIsUnretired(event.target.checked)
        setShowUnretired(event.target.checked)
        break;
      
      default:
        break;
    }

    resetSelectedSchedule()
  }

  return (
    <div className='filters mb-30'>
      <h3 className='uppercase mb-10 d-flex justify-between'>
        <span>Filters</span>
        <span className='material-icons menu'>tune</span>
      </h3>

      <select className="mb-10" onChange={handleChangeInterval}>
        <option value="" key="0">Interval [any]</option>
        {intervals.map(interval => (
          <>
            <option value={interval} key="1">{interval}</option>
          </>
        ))}
      </select>

      <input
        className="mb-10"
        type='text'
        placeholder='Search by name or description'
        onChange={handleChangeQuery}
      />

      <div className="d-flex mb-20">
        <div className="d-flex w-50">
          <input
            type="checkbox"
            id="retired"
            name="retired"
            checked={isRetired}
            onChange={handleRetiredChange}
          />
          <label htmlFor="retired"><strong>Retired</strong></label>
        </div>

        <div className="d-flex w-50">
          <input
            type="checkbox"
            id="unretired"
            name="unretired"
            checked={isUnretired}
            onChange={handleRetiredChange}
          />
          <label htmlFor="unretired"><strong>Unretired</strong></label>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default Filters