import { useState } from "react"

const Filters = ({
  setScheduleQuery,
  setScheduleInterval,
  setFilteredLogs,
  setSelectedSchedule,
  setShowRetired,
  setShowUnretired
}) => {
  const [isRetired, setIsRetired] = useState(true)
  const [isUnretired, setIsUnretired] = useState(true)

  const resetSelectedSchedule = () => {
    setFilteredLogs([])
    setSelectedSchedule(0)
  }

  const handleChangeQuery = (event) => {
    setScheduleQuery(event.target.value)
    resetSelectedSchedule()
  }

  const handleChangeInterval = (event) => {
    setScheduleInterval(event.target.value)
    resetSelectedSchedule()
  }

  const handleRetiredChange = (event) => {
    console.log()
    switch (event.target.id) {
      case 'retired':
        setIsRetired(event.target.checked)
        setShowRetired(event.target.checked)
        break;

      case 'unretired':
        setIsUnretired(event.target.checked)
        setShowUnretired(event.target.checked)
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
        <option value="Second" key="1">Second</option>
        <option value="Minute" key="2">Minute</option>
        <option value="Hour" key="3">Hour</option>
        <option value="Day" key="4">Day</option>
        <option value="Week" key="5">Week</option>
        <option value="Month" key="6">Month</option>
        <option value="Year" key="7">Year</option>
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