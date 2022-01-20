const Filters = ({ setScheduleQuery }) => {
  const handleChangeQuery = (event) => {
    setScheduleQuery(event.target.value)
  }

  return (
    <div className='filters mb-30'>
      <h3 className='uppercase mb-10'>Search</h3>

      <input
        type='text'
        placeholder='Search by name or description'
        onChange={handleChangeQuery}
      />
    </div>
  )
}

export default Filters