import { NgModule } from "@angular/core";
import { Routes , RouterModule} from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { FelxboxComponent } from "./felxbox/felxbox.component";

const routes: Routes = [
  {path : 'button', component: ButtonComponent},
  {path: 'flex', component : FelxboxComponent},
  {path: '**', redirectTo:'button'}
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class DemoRoutingModule{}
