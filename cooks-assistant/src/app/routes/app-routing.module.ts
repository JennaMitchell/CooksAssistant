import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'recipe-creator',
    loadChildren: () =>
      import('../pages/recipe-creator/recipe-creator.module').then(
        (m) => m.RecipeCreatorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
