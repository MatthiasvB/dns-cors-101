import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TitleSlideComponent} from './slides/title-slide/title-slide.component';
import {ProblemToSolveComponent} from './slides/problem-to-solve/problem-to-solve.component';
import {FindSolutionComponent} from './slides/find-solution/find-solution.component';
import {SolutionTypescriptComponent} from './slides/solution-typescript/solution-typescript.component';
import {LibraryCodeComponent} from './slides/library-code/library-code.component';
import {LibApiComponent} from './slides/lib-api/lib-api.component';
import {ParametersRoutesComponent} from './slides/parameters-routes/parameters-routes.component';
import {IdealApiComponent} from './slides/ideal-api/ideal-api.component';
import {LinksComponent} from './slides/links/links.component';
import {ChallengesOverviewComponent} from './slides/challenges-overview/challenges-overview.component';
import {NameTakenComponent} from './slides/name-taken/name-taken.component';
import {NameTooSimilarComponent} from './slides/name-too-similar/name-too-similar.component';
import {WriteTestsComponent} from './slides/write-tests/write-tests.component';
import {ConfigureForEverybodyComponent} from './slides/configure-for-everybody/configure-for-everybody.component';
import {
  ConfigureForEverybodyPackageJsonComponent
} from './slides/configure-for-everybody-package-json/configure-for-everybody-package-json.component';
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
import { SeeThePainCorsComponent } from './slides/see-the-pain-cors/see-the-pain-cors.component';
import { AnyProblemsComponent } from './slides/any-problems/any-problems.component';
import { TrustedCertificatesComponent } from './slides/trusted-certificates/trusted-certificates.component';
import { BonusNixosComponent } from './slides/bonus-nixos/bonus-nixos.component';
import { AgendaComponent } from './slides/agenda/agenda.component';
import { RealAgendaComponent } from './slides/real-agenda/real-agenda.component';
import { GoalComponent } from './slides/goal/goal.component';
import { StepsComponent } from './slides/steps/steps.component';
import { SeeTheSolutionCorsComponent } from './slides/see-the-solution-cors/see-the-solution-cors.component';
import { GithubComponent } from './slides/github/github.component';

export const slideRoutes = [
  { path: "titlepage", component: TitleSlideComponent },
  { path: "agenda", component: AgendaComponent },
  { path: "real-agenda", component: RealAgendaComponent },
  { path: "i-heard-there-was-a-website", component: IHeardThereWasAWebsiteComponent },
  { path: "why-though", component: WhyThoughComponent },
  { path: "authenticity-how", component: AuthenticityHowComponent },
  { path: "ssl-vs-tls", component: SslVsTlsComponent },
  { path: "goal", component: GoalComponent },
  { path: "steps", component: StepsComponent },
  { path: "do-we-want-that", component: DoWeWantThatComponent },
  { path: "do-we-want-to-deal-with-that", component: DoWeWantToDealWithThatComponent },
  { path: "do-we-have-to", component: DoWeHaveToComponent },
  { path: "solution", component: SolutionComponent },
  { path: "whats-the-pain-cors", component: WhatsThePainCorsComponent },
  { path: "see-the-pain-cors", component: SeeThePainCorsComponent },
  { path: "reverse-what", component: ReverseWhatComponent },
  { path: "solution-cors", component: SeeTheSolutionCorsComponent },
  { path: "whats-the-pain-tls", component: WhatsThePainTlsComponent },
  { path: "but-how-1", component: ButHowComponent },
  { path: "any-problems", component: AnyProblemsComponent },
  { path: "trusted-certificates", component: TrustedCertificatesComponent },
  { path: "bonus-nixos", component: BonusNixosComponent },
  { path: "github", component: GithubComponent },
  // { path: "problem-to-solve", component: ProblemToSolveComponent },
  // { path: "ideal-api", component: IdealApiComponent },
  // { path: "solution-ansatz", component: FindSolutionComponent },
  // { path: "solution-typescript", component: SolutionTypescriptComponent },
  // { path: "name-collision", component: NameTakenComponent },
  // { path: "name-too-similar", component: NameTooSimilarComponent },
  // { path: "library", component: LibraryCodeComponent },
  // { path: "lib-api", component: LibApiComponent },
  // { path: "parameter-routes", component: ParametersRoutesComponent },
  // { path: "write-tests", component: WriteTestsComponent },
  // { path: "ts-configs", component: ConfigureForEverybodyComponent },
  // { path: "package-json", component: ConfigureForEverybodyPackageJsonComponent },
  // { path: "links", component: LinksComponent }
];

const routes: Routes = [
  ...slideRoutes,
  { path: "", pathMatch: "full", redirectTo: 'titlepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
