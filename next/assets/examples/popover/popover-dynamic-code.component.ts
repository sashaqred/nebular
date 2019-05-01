import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { PopoverListComponent, PopoverTabsComponent } from './components/dynamic.components';
import { NbPopoverDirective } from '@nebular/theme';


@Component({
  selector: 'nb-popover-dynamic-code',
  templateUrl: './popover-dynamic-code.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    .margin-bottom-0 {
      margin-bottom: 0;
    }
    .section {
      margin-bottom: 2rem;
    }
    .popover-container {
      display: flex;
      justify-content: center;
      padding: 12rem;
    }
    button {
      margin-right: 1rem;
      margin-top: 1rem;
    }
  `],
})
export class PopoverDynamicCodeComponent implements OnDestroy, AfterViewInit {

  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;
  @ViewChild('tabs', { read: TemplateRef }) templateTabs: TemplateRef<any>;
  @ViewChild('list', { read: TemplateRef }) templateList: TemplateRef<any>;

  componentList = PopoverListComponent;
  componentTabs = PopoverTabsComponent;
  textContent = 'Hello World';
  component: any = this.componentList;
  items = [];

  interval: any;

  stopRuntimeChange() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  changeComponent(component) {
    this.popover.content = component;
    this.popover.rebuild();
  }

  changeTrigger(trigger) {
    this.popover.trigger = trigger;
    this.popover.rebuild();
  }

  changePlacement(placement) {
    this.popover.position = placement;
    this.popover.rebuild();
  }

  startRuntimeChange() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        const random = this.items[Math.floor(Math.random() * this.items.length)];
        this.changeComponent(random);
      }, 2000);
    }
  }

  ngAfterViewInit() {
    this.items = [
      this.componentList,
      this.componentTabs,
      this.templateList,
      this.templateTabs,
      this.textContent,
    ];
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
