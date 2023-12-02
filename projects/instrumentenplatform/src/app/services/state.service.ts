import { Injectable } from '@angular/core';
import { Language } from '../model/interfaces';
import { StaticService } from './services';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public language = {
    set: (language: Language): Language => this.internal.language = language,
    get: (): Language => this.internal.language
  }

  public demo = {
    set: (state: boolean): boolean => this.internal.demo = state,
    get: (): boolean => this.internal.demo
  }

  constructor() { }

  private internal: {
    language: Language,
    demo: boolean,
  } = {
    language: StaticService.languages[0],
    demo: true,
  }
}
