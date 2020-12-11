import { getMainDefinition } from 'apollo-utilities';
import { useMutation } from '@apollo/react-hooks';

import eventEmitter from 'services/eventEmmiter';

// const eventEmitter = getEmitter()

function useUploadMutation(query, qName = null) {
  let name = qName;

  if (!name) {
    const queryDef = getMainDefinition(query);
    name = queryDef.name.value;
  }

  const [mutate] = useMutation(query);

  return async (variables) => {
    const params = {
      variables,
      options: { context: { isUploadMutation: true } }
    };
    const res = await mutate(params);

    eventEmitter.emit(name, {
      payload: res.data
    });

    return res;
  };
}

export default useUploadMutation;
