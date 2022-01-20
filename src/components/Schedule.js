const Schedule = ({
  schedule: {
    name,
    description,
    id
  },
  handleClickSchedule
}) => {
    return (
        <div onClick={handleClickSchedule(id)} className='schedule'>
          <p className='schedule-name'>{name}</p>
          <p className='schedule-description'>{description}</p>
        </div>
    )
}

export default Schedule