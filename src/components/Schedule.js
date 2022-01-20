const Schedule = ({
  schedule: {
    name,
    description,
    id,
    isRetired
  },
  handleClickSchedule,
  selectedSchedule,
  toggleIsRetired
}) => {
  return (
      <div
        onClick={handleClickSchedule(id)}
        className={`schedule ${selectedSchedule === id ? 'active' : ''}`}
      >
        <h3 className='schedule-name'>{name}</h3>
        <p className='schedule-description'>{description}</p>
        <div className='schedule-button'>
          <button onClick={toggleIsRetired(id)}>{isRetired ? 'Unretire' : 'Retire'}</button>
        </div>
      </div>
  )
}

export default Schedule