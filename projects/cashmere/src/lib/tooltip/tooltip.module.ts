import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipComponent} from './tooltip.component';
import {PopModule} from '../pop/popover.module';

@NgModule({
    imports: [CommonModule, PopModule],
    exports: [TooltipComponent],
    declarations: [TooltipComponent]
})
export class TooltipModule {}
