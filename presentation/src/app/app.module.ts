import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TitleComponent} from './templates/title/title.component';
import {PageContainerComponent} from './templates/page-container/page-container.component';
import {PageComponent} from './templates/page/page.component';
import {PageTitleComponent} from './templates/page-title/page-title.component';
import {TitleSlideComponent} from './slides/title-slide/title-slide.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {ProblemToSolveComponent} from './slides/problem-to-solve/problem-to-solve.component';
import {FindSolutionComponent} from './slides/find-solution/find-solution.component';
import {SolutionTypescriptComponent} from './slides/solution-typescript/solution-typescript.component';
import {LibraryCodeComponent} from './slides/library-code/library-code.component';
import {LibApiComponent} from './slides/lib-api/lib-api.component';
import {ParametersRoutesComponent} from './slides/parameters-routes/parameters-routes.component';
import {IdealApiComponent} from './slides/ideal-api/ideal-api.component';
import {PrevNextButtonsComponent} from './templates/prev-next-buttons/prev-next-buttons.component';
import {ProgressIndicatorComponent} from './templates/progress-indicator/progress-indicator.component';
import { LinksComponent } from './slides/links/links.component';
import { ChallengesOverviewComponent } from './slides/challenges-overview/challenges-overview.component';
import { NameTakenComponent } from './slides/name-taken/name-taken.component';
import { NameTooSimilarComponent } from './slides/name-too-similar/name-too-similar.component';
import { WriteTestsComponent } from './slides/write-tests/write-tests.component';
import { ConfigureForEverybodyComponent } from './slides/configure-for-everybody/configure-for-everybody.component';
import { ConfigureForEverybodyPackageJsonComponent } from './slides/configure-for-everybody-package-json/configure-for-everybody-package-json.component';
import { WhyThoughComponent } from './slides/why-though/why-though.component';
import { AuthenticityHowComponent } from './slides/authenticity-how/authenticity-how.component';
import { SslVsTlsComponent } from './slides/ssl-vs-tls/ssl-vs-tls.component';
import { DoWeWantThatComponent } from './slides/do-we-want-that/do-we-want-that.component';
import { DoWeWantToDealWithThatComponent } from './slides/do-we-want-to-deal-with-that/do-we-want-to-deal-with-that.component';
import { DoWeHaveToComponent } from './slides/do-we-have-to/do-we-have-to.component';
import { WhatsThePainTlsComponent } from './slides/whats-the-pain-tls/whats-the-pain-tls.component';
import { WhatsThePainCorsComponent } from './slides/whats-the-pain-cors/whats-the-pain-cors.component';
import { SolutionComponent } from './slides/solution/solution.component';
import { ReverseWhatComponent } from './slides/reverse-what/reverse-what.component';
import { ButHowComponent } from './slides/but-how/but-how.component';
import { IHeardThereWasAWebsiteComponent } from './slides/i-heard-there-was-a-website/i-heard-there-was-a-website.component';
import { SeeThePainComponent } from './slides/see-the-pain/see-the-pain.component';
import { SeeThePainCorsComponent } from './slides/see-the-pain-cors/see-the-pain-cors.component';
import { SeeThePainTlsComponent } from './slides/see-the-pain-tls/see-the-pain-tls.component';
import { AnyProblemsComponent } from './slides/any-problems/any-problems.component';
import { TrustedCertificatesComponent } from './slides/trusted-certificates/trusted-certificates.component';
import { BonusNixosComponent } from './slides/bonus-nixos/bonus-nixos.component';
import { AgendaComponent } from './slides/agenda/agenda.component';
import { RealAgendaComponent } from './slides/real-agenda/real-agenda.component';
import { GoalComponent } from './slides/goal/goal.component';
import { StepsComponent } from './slides/steps/steps.component';
import { FlowComponent } from './templates/flow/flow.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PageComponent,
    PageContainerComponent,
    PageTitleComponent,
    TitleSlideComponent,
    ProblemToSolveComponent,
    FindSolutionComponent,
    SolutionTypescriptComponent,
    LibraryCodeComponent,
    LibApiComponent,
    ParametersRoutesComponent,
    IdealApiComponent,
    PrevNextButtonsComponent,
    ProgressIndicatorComponent,
    LinksComponent,
    ChallengesOverviewComponent,
    NameTakenComponent,
    NameTooSimilarComponent,
    WriteTestsComponent,
    ConfigureForEverybodyComponent,
    ConfigureForEverybodyPackageJsonComponent,
    WhyThoughComponent,
    AuthenticityHowComponent,
    SslVsTlsComponent,
    DoWeWantThatComponent,
    DoWeWantToDealWithThatComponent,
    DoWeHaveToComponent,
    WhatsThePainTlsComponent,
    WhatsThePainCorsComponent,
    SolutionComponent,
    ReverseWhatComponent,
    ButHowComponent,
    IHeardThereWasAWebsiteComponent,
    SeeThePainComponent,
    SeeThePainCorsComponent,
    SeeThePainTlsComponent,
    AnyProblemsComponent,
    TrustedCertificatesComponent,
    BonusNixosComponent,
    AgendaComponent,
    RealAgendaComponent,
    GoalComponent,
    StepsComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // @ts-ignore
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          json: () => import('highlight.js/lib/languages/json'),
        },
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
