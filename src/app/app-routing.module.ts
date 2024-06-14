import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule) },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/skills/skills.module').then((m) => m.SkillsModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir raíz a home
  { path: '**', redirectTo: '/home' }, // Redirigir cualquier ruta desconocida a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Añadir useHash: true
  exports: [RouterModule],
})
export class AppRoutingModule {}
