import {Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule, Output, EventEmitter} from '@angular/core';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {AppTheme} from "./app-theme";


@Component({
  selector: 'theme-picker',
  templateUrl: 'theme-picker.html',
  styleUrls: ['theme-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'true'},
})
export class ThemePicker {
  @Output() themeEventEmitter: EventEmitter <AppTheme> = new EventEmitter();
  currentTheme;

  themes = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      classKey: 'miaxello-cyan-dark-theme',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      classKey: 'miaxello-indigo-light-theme',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      classKey: 'miaxello-cyan-dark-theme',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      classKey: 'miaxello-indigo-light-theme',
      isDark: true,
    }
  ];

  constructor() {
    this.currentTheme = this.themes[2];
  }

  switchTheme(theme: AppTheme) {
    this.currentTheme = theme;
    this.themeEventEmitter.emit(theme);
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    CommonModule
  ],
  exports: [ThemePicker],
  declarations: [ThemePicker]
})

export class ThemePickerModule { }
