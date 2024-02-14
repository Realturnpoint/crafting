import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IItem, IIngredient } from '../../types';

@Component({
  selector: 'ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IngredientComponent),
    multi: true,
  }],
})
export class IngredientComponent implements OnInit, ControlValueAccessor {

  @Input()
  public items: IItem[] = [];

  public get itemCount(): number {
    return this.model.count;
  }

  public set itemCount(count: number) {
    console.log('setting item count:', count);
    this.model.count = count;
    this.onChange(this.model);
  }

  public get itemValue(): IItem {
    return this.model.item;
  }

  public set itemValue(item: IItem) {
    console.log('setting item value', item);
    this.model.item = item;
    this.onChange(this.model);
  }

  private model: IIngredient;

  private onChange = (_: IIngredient) => { };
  private onTouched = () => { };

  public constructor() { }

  public ngOnInit() {
  }

  public writeValue(value: IIngredient) {
    console.log('writeValue');
    this.model = value || { count: 1, item: null };
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState() {}

}