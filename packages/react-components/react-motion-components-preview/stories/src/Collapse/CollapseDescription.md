The `Collapse` component manages content presence, using Collapse in/out.

> **⚠️ Preview components are considered unstable**

```tsx
import { Collapse } from '@fluentui/react-motion-components-preview';

function Component({ open }) {
  return (
    <Collapse open={open}>
      <div style={{ background: 'lightblue' }}>Content</div>
    </Collapse>
  );
}
```
