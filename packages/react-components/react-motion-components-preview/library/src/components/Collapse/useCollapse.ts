import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';
import type { CollapseProps, CollapseState } from './Collapse.types';

/**
 * Returns the props and state required to render the component
 * @param props - Collapse properties
 * @param ref - reference to root HTMLElement of Collapse
 */
export const useCollapse_unstable = (props: CollapseProps, ref: React.Ref<HTMLElement>): CollapseState => {
  return {
    open: props.open,
    components: {
      root: 'div',
    },
    root: slot.always(
      getIntrinsicElementProps('div', {
        ref: ref as React.Ref<HTMLDivElement>,
        ...props,
      }),
      { elementType: 'div' },
    ),
  };
};
