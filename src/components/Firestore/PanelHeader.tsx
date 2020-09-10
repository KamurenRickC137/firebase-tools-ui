/**
 * Copyright 2019 Google LLC
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

import './PanelHeader.scss';

import { Theme } from '@rmwc/theme';
import { Typography } from '@rmwc/typography';
import React from 'react';

import { CardActionBar, CardActionBarActions } from '../common/CardActionBar';
import { CopyButton } from '../common/CopyButton';

export const PanelHeader: React.FC<{ id: string; icon: React.ReactNode }> = ({
  id,
  icon,
  children,
}) => {
  return (
    <div className="Firestore-PanelHeader">
      <CardActionBar>
        <Theme use="secondary">{icon}</Theme>
        <Typography use="body2" className="Firestore-PanelHeader-title">
          {id}
        </Typography>
        <CardActionBarActions>
          {children}
          <CopyButton text={id} label="Copy ID" />
        </CardActionBarActions>
      </CardActionBar>
    </div>
  );
};

export default PanelHeader;
