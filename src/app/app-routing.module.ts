import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BComponent } from './b/b.component';
import { BugupdationComponent } from './bugupdation/bugupdation.component';
import { ContactComponent } from './contact/contact.component';
import { CreatebugComponent } from './createbug/createbug.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  // {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'bugupdation',component:BugupdationComponent},
  {path:'',component:BComponent},
  {path:'bapp',component:BComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'create-bug',component:CreatebugComponent},
 {path:'footer',component:FooterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
