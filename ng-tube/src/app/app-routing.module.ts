import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { HomemadeComponent } from './homemade/homemade.component';


const routes: Routes = [
  
  
  { path: '', component: HomemadeComponent },
  { path: 'videos', component: VideoComponent },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
