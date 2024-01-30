import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

// Configuração das rotas da aplicação, paginação
const routes: Routes = [
  {
    path: '', // Rota vazia, correspondendo à raiz da aplicação
    component: HomeComponent // Carrega o componente HomeComponent quando a rota é acessada
  },
  {
    path: 'content/:Id', // Rota que espera um parâmetro chamado 'Id'
    component: ContentComponent // Carrega o componente ContentComponent quando a rota é acessada
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
