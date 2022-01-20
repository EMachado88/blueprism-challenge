const Filters = () => {
  return (
    <div className='filters mb-30'>
      <h3 className='uppercase mb-10'>Filters</h3>
      
      <select className='mb-10'>
        <option value='NA' key={0}>- Interval -</option>
        <option value='Once' key={1}>Once</option>
        <option value='Second' key={2}>Second</option>
        <option value='Day' key={3}>Day</option>
        <option value='Week' key={4}>Week</option>
        <option value='Month' key={5}>Month</option>
        <option value='Year' key={6}>Year</option>
      </select>

      <input type='' placeholder='Search by name or description' />
    </div>
  )
}

export default Filters