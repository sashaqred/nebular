/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './select-issues.component.html',
  styles: [`
    :host{
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    button {
      width: 100%;
    }

    nb-card {
      flex: 1 1 40%;
      margin: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectIssuesComponent {
  selectedItem = 2;
  input = new FormControl(2);

  optionsAfterSetTimeout = [];
  optionsSync = [1, 2, 3, 4];

  constructor() {
    setTimeout(() => {
      this.optionsAfterSetTimeout = [1, 2, 3, 4];
    }, 1000);
  }

  eventFunction() {}
}
