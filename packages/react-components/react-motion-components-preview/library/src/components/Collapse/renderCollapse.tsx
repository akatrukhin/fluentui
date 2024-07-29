/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import { assertSlots } from '@fluentui/react-utilities';
import type { CollapseState, CollapseSlots } from './Collapse.types';
import { ContainerTransform, Fade } from '@fluentui/react-motion-components-preview';

/**
 * Function that renders the final JSX of the component
 */
export const renderCollapse_unstable = (state: CollapseState) => {
  assertSlots<CollapseSlots>(state);

  return (
    <ContainerTransform visible={state.open} unmountOnExit>
      <div>
        <Fade visible={state.open}>
          <state.root />
        </Fade>
      </div>
    </ContainerTransform>
  );
};
