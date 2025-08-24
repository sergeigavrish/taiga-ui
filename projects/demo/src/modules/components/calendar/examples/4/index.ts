import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK, TuiCalendar} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiCalendar],
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
export default class Example {}
