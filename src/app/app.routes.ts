import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MushroomGuideComponent } from './features/mushrrom-guide/mushrrom-guide.component';

export const routes: Routes = [
    {
        path: 'mushroom-guide',
        component: MushroomGuideComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
