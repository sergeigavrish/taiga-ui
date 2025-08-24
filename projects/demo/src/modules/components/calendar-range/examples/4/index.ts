import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';
import {TuiCalendarRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: signal(TuiDayOfWeek.Sunday),
        },
    ],
})
export default class Example {
    protected readonly xxx = inject(TUI_FIRST_DAY_OF_WEEK);

    public onClick(): void {
        this.xxx.set(Math.floor(Math.random() * 7) as any);
    }
}
