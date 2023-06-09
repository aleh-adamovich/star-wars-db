import {Component} from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  }

  render() {
    return (
      <>
        {
          this.state.hasError
          ? <ErrorIndicator/>
          : this.props.children
        }
      </>
    )
  }
}

export default ErrorBoundary;
