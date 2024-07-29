import { motionTokens, type PresenceMotionFn, createPresenceComponent } from '@fluentui/react-motion';

/** Define a presence motion for collapse/expand */
const containerTransformMotion: PresenceMotionFn<{ direction?: 'vertical' | 'horizontal' }> = ({
  element,
  direction = 'vertical',
}) => {
  const collapsed = '0'; // Could be a custom param in the future: start partially expanded
  const expanded = `${direction === 'vertical' ? element.scrollHeight : element.scrollWidth}px`;
  const overflow = 'hidden';

  const duration = motionTokens.durationNormal;
  const easing = motionTokens.curveEasyEaseMax;

  return {
    enter: {
      duration,
      easing,
      keyframes: [
        { maxHeight: collapsed, overflow },
        { maxHeight: expanded, offset: 0.9999, overflow },
        { maxHeight: 'unset', overflow },
      ],
    },
    exit: {
      duration,
      easing,
      keyframes: [
        { maxHeight: expanded, overflow },
        { maxHeight: collapsed, overflow },
      ],
    },
  };
};

export const ContainerTransform = createPresenceComponent(containerTransformMotion);
