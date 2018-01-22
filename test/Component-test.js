import test from 'tape';
import {DelayInput} from '../src/Component';


test('DelayInput', t => {
  t.ok(DelayInput instanceof Function, 'should be function');
  t.end();
});
