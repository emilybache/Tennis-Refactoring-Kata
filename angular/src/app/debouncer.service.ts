import {Injectable} from '@angular/core';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeBouncer {
  public debounceTime(dueTime) {
    return debounceTime(dueTime);
  }
}
