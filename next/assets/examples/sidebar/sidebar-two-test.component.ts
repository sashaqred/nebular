import { Component } from '@angular/core';

@Component({
  selector: 'nb-sidebar-two-test',
  styles: [
    `
    :host /deep/ nb-layout-column {
      background-color: #76ecff;
    }
    `,
  ],
  template: `
    <nb-layout>

      <nb-layout-header></nb-layout-header>

      <nb-sidebar>
        Left
      </nb-sidebar>

      <nb-sidebar right fixed>
        Right
      </nb-sidebar>

      <nb-layout-footer></nb-layout-footer>

    </nb-layout>
`,
})
export class SidebarTwoTestComponent {
}
