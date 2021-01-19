import {directive} from 'lit-html';

export class SubjectPartial {
  // value;
  // #__isCommited = false;
  constructor(){
    this.part = directive(() => (part) => {
      this.commit = () => part.commit();
      this.setValue = (value) => {
        this.value = value;
        part.setValue(value);
      }
      if(this.value) part.setValue(this.value);
      if(this.#__isCommited) part.commit();
    })
  }
  setValue(value){
    this.value = value;
  }
  commit() {
    this.#__isCommited = true;
  }
}