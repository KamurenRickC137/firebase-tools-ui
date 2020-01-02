/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DatabaseDefaultRoute } from './DatabaseDefaultRoute';

it('renders loading when projectId is not ready', () => {
  const { getByText } = render(<DatabaseDefaultRoute projectId={undefined} />);
  expect(getByText('Loading')).not.toBeNull();
});

it('redirects when projectId is ready', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Route exact path="/database/sample/data">
        SUCCESS
      </Route>
      <DatabaseDefaultRoute projectId={'sample'} />
    </MemoryRouter>
  );
  expect(getByText('SUCCESS')).not.toBeNull();
});
