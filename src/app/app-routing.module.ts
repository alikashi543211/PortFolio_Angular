import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "education",
        component: EducationComponent,
    },
    {
        path: "skills",
        component: SkillsComponent,
    },
    {
        path: "experience",
        component: ExperienceComponent,
    },
    {
        path: "portfolio",
        component: PortfolioComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
