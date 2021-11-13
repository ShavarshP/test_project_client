import * as AuthenticationCreators from "./user";
import * as Update from "./admin";
export default {
  ...AuthenticationCreators,
  ...Update,
};
