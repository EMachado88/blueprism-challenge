const Filters = ({ setScheduleQuery, setScheduleInterval }) => {
  const handleChangeQuery = (event) => {
    setScheduleQuery(event.target.value)
  }

  const handleChangeInterval = (event) => {
    setScheduleInterval(event.target.value)
  }

  return (
    <div className='filters mb-30'>
      <h3 className='uppercase mb-10'>Filters</h3>

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
        type='text'
        placeholder='Search by name or description'
        onChange={handleChangeQuery}
      />
    </div>
  )
}

export default Filters