import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CollapseSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type CollapseProps = ComponentProps<CollapseSlots> & {
  open: boolean;
};
export type CollapseState = ComponentState<CollapseSlots> & {
  open: boolean;
};
