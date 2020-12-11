import { useContext } from 'react';

import { LikeContext } from '../contexts/LikeContext';

const useLike = () => useContext(LikeContext);

export default useLike;
