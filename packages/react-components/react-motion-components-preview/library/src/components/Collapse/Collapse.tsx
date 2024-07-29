import * as React from 'react';
import { useCollapse_unstable } from './useCollapse';
import { renderCollapse_unstable } from './renderCollapse';
import { useCustomStyleHook_unstable } from '@fluentui/react-shared-contexts';
import { useCollapseStyles_unstable } from './useCollapseStyles.styles';
import type { CollapseProps } from './Collapse.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Define a styled Collapse, using the `useCollapse_unstable` and `useCollapseStyles_unstable` hooks.
 */
export const Collapse: ForwardRefComponent<CollapseProps> = React.forwardRef((props, ref) => {
  const state = useCollapse_unstable(props, ref);

  useCollapseStyles_unstable(state);

  useCustomStyleHook_unstable('useCollapseStyles_unstable')(state);

  return renderCollapse_unstable(state);
});

Collapse.displayName = 'Collapse';
