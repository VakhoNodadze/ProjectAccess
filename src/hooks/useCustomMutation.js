import { getMainDefinition } from 'apollo-utilities';
import { useMutation } from '@apollo/react-hooks';

import getEmitter from '../eventEmitter';

const eventEmitter = getEmitter();

// TODO: rename!!!
function useCustomMutation(query, qName = null) {
  let name = qName;

  if (!name) {
    const queryDef = getMainDefinition(query);
    name = queryDef.name.value;
  }

  const [mutate] = useMutation(query);

  return async (variables) => {
    const res = await mutate({ variables });

    eventEmitter.emit(name, {
      payload: res.data
    });

    return res;
  };
}

export default useCustomMutation;
