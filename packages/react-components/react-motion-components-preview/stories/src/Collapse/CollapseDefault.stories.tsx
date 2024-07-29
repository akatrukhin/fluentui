import * as React from 'react';
import { Field, makeStyles, tokens, Switch } from '@fluentui/react-components';
import { Collapse } from '@fluentui/react-motion-components-preview';

const useClasses = makeStyles({
  container: {
    display: 'grid',
    gridTemplate: `"controls ." "card card" / 1fr 1fr`,
    gap: '20px 10px',
  },
  card: {
    gridArea: 'card',
    padding: '12px',
    margin: '16px',
    border: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralForeground3}`,
    borderRadius: tokens.borderRadiusSmall,
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    gridArea: 'controls',

    border: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralForeground3}`,
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: tokens.shadow16,
  },
  field: {
    flex: 1,
  },
});

const LoremIpsum = () => {
  const classes = useClasses();
  return (
    <div className={classes.card}>
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '.repeat(
        10,
      )}
    </div>
  );
};

export const Default = () => {
  const classes = useClasses();
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <Field className={classes.field}>
          <Switch label="Open" checked={visible} onChange={() => setVisible(v => !v)} />
        </Field>

        <Collapse open={visible}>
          <LoremIpsum />
        </Collapse>
      </div>
    </div>
  );
};
