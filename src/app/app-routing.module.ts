import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistertimeComponent } from './pages/registertime/registertime.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReportComponent } from './pages/report/report.component';
import { SearchComponent } from './pages/search/search.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes=[
    {path: 'login',component: LoginComponent},
    {path: 'registertime',component:RegistertimeComponent},
    {path: 'home',component:HomeComponent},
    {path: 'attendance',component:AttendanceComponent},
    {path: 'profile',component:ProfileComponent},
    {path: 'user',component:UserComponent},
    {path: 'search',component:SearchComponent},
    {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}