/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import { assertSlots } from '@fluentui/react-utilities';
import type { CollapseState, CollapseSlots } from './Collapse.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderCollapse_unstable = (state: CollapseState) => {
  assertSlots<CollapseSlots>(state);

  const fadedContent = (
    <div>
      {state.fade ? (
        <state.fade>
          <state.root />
        </state.fade>
      ) : (
        <state.root />
      )}
    </div>
  );
  return state.containerTransform ? <state.containerTransform>{fadedContent}</state.containerTransform> : fadedContent;
};
