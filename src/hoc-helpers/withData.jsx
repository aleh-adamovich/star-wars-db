import React, {useEffect, useState} from 'react';
import Spinner from "../components/Spinner/Spinner";
import ErrorIndicator from "../components/ErrorIndicator/ErrorIndicator";

const withData = (WrappedComponent) => {
  return function WrappedWithData(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      props.getData()
        .then((response) => {
          setData(response);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [props]);

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return <WrappedComponent {...props} data={data}/>
  }
};

export default withData;
