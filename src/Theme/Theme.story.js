import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Theme from './Theme';

storiesOf('Theme', module)
  .add('default', () => (
    <Theme>
      <div>Child</div>
    </Theme>
  ));
