import {Routes} from '@angular/router';

import {HomeComponent} from '../../home/home.component';
import {UserComponent} from '../../user/user.component';
import {TablesComponent} from '../../tables/tables.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';

import {NotificationsComponent} from '../../notifications/notifications.component';
import {NoteTechComponent} from "../../note-tech/note-tech.component";
import {LoginComponent} from "../../login/login.component";


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    {path: 'note',            component: NoteTechComponent},
    {path: 'note',            component: NoteTechComponent},
    {path: 'login',            component: LoginComponent},
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },

];
