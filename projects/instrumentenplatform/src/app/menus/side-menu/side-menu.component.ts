import { Component, Inject, OnInit } from '@angular/core';
import { Language } from '../../model/interfaces/selection-item';
import { TranslateService } from '@ngx-translate/core';
import { SidenavService, StateService, StaticService } from '../../services/services';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MaterialModule } from '../../shared/material.module';
import { BaseModule } from '../../shared/base.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [ FormsModule, MaterialModule, BaseModule, FontAwesomeModule, RouterLink ]
})
export class SideMenuComponent implements OnInit {

  public icons = StaticService.icons;
  public languages = StaticService.languages;
  public lang: {[index: string]: string} = {};
  public selectedLanguage =  this.state.language.get();
  public show = {
    pages: true,
    settings: true
  }

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

  toggleSettings() {
    this.show.settings = !this.show.settings;
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
