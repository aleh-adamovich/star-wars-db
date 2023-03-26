const Row = ({left, right}) => {
  return (
    <div className='row mt-3 mb-3'>
      <div className='col-md-6'>
        {left}
      </div>
      <div className='col-md-6'>
        {right}
      </div>
    </div>
  )
}

export default Row;
