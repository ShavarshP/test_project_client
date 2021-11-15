/* eslint-disable import/no-anonymous-default-export */
import * as AuthenticationCreators from "./user";
import * as Update from "./admin";
export default {
  ...AuthenticationCreators,
  ...Update,
};
