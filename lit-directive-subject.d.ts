import {DirectiveFn} from 'lit-html';

export declare class SubjectPartial {
  readonly value: any
  setValue(v: any): void
  commit(): void
  part(): DirectiveFn
}