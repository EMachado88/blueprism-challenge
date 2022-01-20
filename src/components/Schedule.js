const Schedule = ({
  schedule: {
    name,
    description,
    id,
    isRetired,
    tasksCount,
    intervalType
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
        <p className='schedule-interval'><strong>Interval:</strong> {intervalType}</p>
        <div className='schedule-button'>
          <span><strong>Tasks:</strong> {tasksCount}</span>
          <button onClick={toggleIsRetired(id)}>{isRetired ? 'Unretire' : 'Retire'}</button>
        </div>
      </div>
  )
}

export default Schedule