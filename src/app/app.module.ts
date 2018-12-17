import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { DocsComponent } from './page/docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'docs', component: DocsComponent },
      { path: '**', redirectTo: '' },
    ]),
    NgxGistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
