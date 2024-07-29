import type { SlotClassNames } from '@fluentui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';

import type { CollapseSlots, CollapseState } from './Collapse.types';

export const CollapseClassNames: SlotClassNames<CollapseSlots> = {
  root: 'fui-Collapse',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {},
});

/** Applies style classnames to slots */
export const useCollapseStyles_unstable = (state: CollapseState) => {
  'use no memo';

  const styles = useStyles();
  state.root.className = mergeClasses(CollapseClassNames.root, styles.root, state.root.className);

  return state;
};
