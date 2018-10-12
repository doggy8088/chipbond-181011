import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form', loadChildren: './demo/form/form.module#FormPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'reorder', loadChildren: './reorder/reorder.module#ReorderPageModule' },
  { path: 'infinite-scroll', loadChildren: './infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'pull-to-refresh', loadChildren: './pull-to-refresh/pull-to-refresh.module#PullToRefreshPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
