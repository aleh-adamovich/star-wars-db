const withChildFunction = (WrappedComponent, fn) => {
  return (props) => {
    return (
      <WrappedComponent {...props}>
        {fn}
      </WrappedComponent>
    )
  }
}

export default withChildFunction;
