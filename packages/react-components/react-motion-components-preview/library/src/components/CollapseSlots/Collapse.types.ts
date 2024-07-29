import type { PresenceComponentProps, PresenceMotionSlotProps } from '@fluentui/react-motion';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type CollapseSlots = {
  root: NonNullable<Slot<'div'>>;
  fade?: Slot<PresenceMotionSlotProps>;
  containerTransform?: Slot<PresenceMotionSlotProps>;
};

export type CollapseProps = ComponentProps<CollapseSlots> & PresenceComponentProps;
export type CollapseState = ComponentState<CollapseSlots> & {};
