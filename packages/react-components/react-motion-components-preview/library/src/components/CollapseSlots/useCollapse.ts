import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';
import { presenceMotionSlot, type PresenceMotionSlotProps } from '@fluentui/react-motion';
import { Fade } from '@fluentui/react-motion-components-preview';
import type { CollapseProps } from './Collapse.types';
import { ContainerTransform } from '../ContainerTransform/ContainerTransform';

/**
 * Returns the props and state required to render the component
 * @param props - Collapse properties
 * @param ref - reference to root HTMLElement of Collapse
 */
export const useCollapse_unstable = (props: CollapseProps, ref: React.Ref<HTMLElement>) => {
  return {
    components: {
      root: 'div',
      fade: Fade as React.FC<PresenceMotionSlotProps>,
      containerTransform: ContainerTransform as React.FC<PresenceMotionSlotProps>,
    },
    root: slot.always(
      getIntrinsicElementProps('div', {
        ref: ref as React.Ref<HTMLDivElement>,
        ...props,
      }),
      { elementType: 'div' },
    ),
    fade:
      props.fade &&
      presenceMotionSlot(props.fade, {
        elementType: Fade,
        defaultProps: {
          visible: props.visible,
          unmountOnExit: props.unmountOnExit,
        },
      }),
    containerTransform:
      props.containerTransform &&
      presenceMotionSlot(props.containerTransform, {
        elementType: ContainerTransform,
        defaultProps: {
          visible: props.visible,
          unmountOnExit: props.unmountOnExit,
        },
      }),
  };
};
