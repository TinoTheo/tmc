// app/helpers/add.js
import { helper } from '@ember/component/helper';

export function add(params) {
  return Number(params[0]) + Number(params[1]);
}

export default helper(add);