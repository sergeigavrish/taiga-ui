import {computed, inject, Pipe, Signal, type PipeTransform} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core/tokens';
import {combineLatest, map, type Observable} from 'rxjs';

function convertToSundayFirstWeekFormat(
    weekDaysNames: readonly string[],
): readonly string[] {
    const sundayIndex = weekDaysNames.length - 1;

    return [weekDaysNames[sundayIndex] || '', ...weekDaysNames.slice(0, sundayIndex)];
}

@Pipe({
    standalone: true,
    name: 'tuiOrderWeekDays',
    pure: true,
})
export class TuiOrderWeekDaysPipe implements PipeTransform {
    public transform(
        mondayFirstWeekDays$: Observable<readonly string[]>,
        firstDayOfWeekIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    ): Observable<readonly string[]> {
        return mondayFirstWeekDays$.pipe(
            map(convertToSundayFirstWeekFormat),
            map((weekDays) => [
                ...weekDays.slice(firstDayOfWeekIndex),
                ...weekDays.slice(0, firstDayOfWeekIndex),
            ]),
        );
    }
}
