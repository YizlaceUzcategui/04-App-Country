import { Placeholder } from './../../../../../../node_modules/@babel/types/lib/index-legacy.d';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
}
