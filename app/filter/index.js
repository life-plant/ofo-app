import momentFilter from './moment.js';
import isRoot from './isRoot.js';

export default app => {
  INCLUDE_ALL_MODULES([momentFilter, isRoot], app);
}
