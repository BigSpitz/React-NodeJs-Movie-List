import React from 'react';
import AppLayout from './AppLayout';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('loads and displays AppLayout component', () => {
  render(
    <AppLayout>
      <span>Test Children</span>
    </AppLayout>
  );
});
