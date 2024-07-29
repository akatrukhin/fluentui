import { expectPresenceMotionFunction, expectPresenceMotionObject } from '../../testing/testUtils';
import { ContainerTransform } from './ContainerTransform';

describe('ContainerTransformMotion', () => {
  it('stores its motion definition as a static function', () => {
    expectPresenceMotionFunction(ContainerTransform);
  });

  it('generates a motion definition from the static function', () => {
    expectPresenceMotionObject(ContainerTransform);
  });
});
