const Schedule = ({ name, description }) => {
    return (
        <div className='schedule'>
          <p className='schedule-title'>{name}</p>
          <p className='schedule-title'>{description}</p>
        </div>
    )
}

export default Schedule