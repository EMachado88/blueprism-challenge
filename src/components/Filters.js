const Filters = ({
  setScheduleQuery,
  setScheduleInterval,
  setFilteredLogs,
  setSelectedSchedule
}) => {
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
        className="mb-20"
        type='text'
        placeholder='Search by name or description'
        onChange={handleChangeQuery}
      />

      <hr />
    </div>
  )
}

export default Filters