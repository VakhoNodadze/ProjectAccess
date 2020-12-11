import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import meQuery from 'graphql/me.graphql';
import { redirect } from 'helpers';
function useMe() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { data, error, loading, refetch } = useQuery(meQuery);

  useEffect(() => {
    if (data && data.me) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [data]);

  return {
    me: data ? data.me : null,
    loading,
    error,
    isAuthorized,
    refetch
  };
}

export default useMe;
