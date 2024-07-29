import { Collapse } from '@fluentui/react-motion-components-preview';
import CollapseDescription from './CollapseDescription.md';

export { Default } from './CollapseDefault.stories';

export default {
  title: 'Motion/Components (preview)/Collapse',
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: CollapseDescription,
      },
    },
  },
};
