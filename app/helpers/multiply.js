// app/helpers/multiply.js
import { helper } from '@ember/component/helper';

export function multiply(params) {
  return Number(params[0]) * Number(params[1]);
}

export default helper(multiply);