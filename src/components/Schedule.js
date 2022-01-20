const Schedule = ({
  schedule: {
    name,
    description,
    id
  },
  handleClickSchedule,
  selectedSchedule
}) => {
    return (
        <div
          onClick={handleClickSchedule(id)}
          className={`schedule ${selectedSchedule === id ? 'active' : ''}`}
        >
          <p className='schedule-name'>{name}</p>
          <p className='schedule-description'>{description}</p>
        </div>
    )
}

export default Schedule