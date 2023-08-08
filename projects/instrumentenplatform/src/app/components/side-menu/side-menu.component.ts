import { Component, Inject, OnInit } from '@angular/core';
import { Language } from '../../model/interfaces/selection-item';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from '../../services/state.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StaticService } from '../../services/static.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public languages = StaticService.languages;
  public lang: {[index: string]: string} = {};
  public selectedLanguage =  this.state.language.get();

  constructor(
    public state: StateService,
    private translate: TranslateService,
    public sidenav: SidenavService
  ) {}

  ngOnInit(): void {
    this.translate.get("HOME").subscribe(items => {
      this.lang = items;
    });
  }

  setDemo(e: MatSlideToggleChange) {
    console.log(e)
    this.state.demo.set(e.checked);
  }

  selectLanguage(language: Language) {
    console.debug(language);
    this.state.language.set(language);
    this.setLanguage(language);
  }

  private setLanguage(language: Language) {
    this.state.language.set(language);
    this.translate.use(this.state.language.get().value);
    this.translate.get("HOME").subscribe(items => {
      this.lang = items;
    });
  }

}
