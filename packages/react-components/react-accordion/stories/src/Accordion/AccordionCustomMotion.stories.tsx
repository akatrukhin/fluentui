import * as React from 'react';
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from '@fluentui/react-components';
import { Collapse } from '@fluentui/react-motion-components-preview';
import { createPresenceComponentVariant, motionTokens } from '@fluentui/react-components';
import type { PresenceMotionSlotProps } from '@fluentui/react-motion';

import description from './AccordionCustomMotion.stories.md';

const CustomCollapseVariant = createPresenceComponentVariant(Collapse, {
  enter: { duration: motionTokens.durationSlow, easing: motionTokens.curveEasyEaseMax },
  exit: { duration: motionTokens.durationNormal, easing: motionTokens.curveEasyEaseMax },
}) as PresenceMotionSlotProps;

export const CustomMotion = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionHeader>Accordion Header 1</AccordionHeader>
      <AccordionPanel collapseMotion={CustomCollapseVariant}>
        <div>Accordion Panel with CustomCollapseVariant motion</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion Header 2</AccordionHeader>
      <AccordionPanel collapseMotion={CustomCollapseVariant}>
        <div>Accordion Panel with CustomCollapseVariant motion</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

CustomMotion.parameters = {
  docs: {
    description: {
      story: description,
    },
  },
};
