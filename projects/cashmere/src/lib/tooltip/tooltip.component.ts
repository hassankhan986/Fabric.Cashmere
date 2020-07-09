import {Component, Input, HostBinding, ViewEncapsulation} from '@angular/core';
import {parseBooleanAttribute} from '../util';

@Component({
    selector: 'hc-tooltip',
    template: '<ng-content></ng-content>',
    encapsulation: ViewEncapsulation.None,
    exportAs: 'hcTooltip'
})
export class TooltipComponent {
    @HostBinding('class.hc-tooltip')
    _tooltipText = '';
    _tooltipDelay = 500;

    @Input()
    get tooltipText(): string {
        return this._tooltipText;
    }
    set tooltipText(value) {
        this._tooltipText = value;
    }

    @Input()
    get tooltipDelay(): number {
        return this._tooltipDelay;
    }
    set tooltipDelay(value) {
        this._tooltipDelay = value;
    }

    constructor() {}
}
