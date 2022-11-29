import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlockUIModule } from 'ng-block-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashComponent } from './dash/dash.component';
import { RoutesModule } from './routes.module';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { ModalGrupoComponent } from './modalgrupo/modalgrupo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ColecaoComponent } from './colecao/colecao.component';
import { ProdutoComponent } from './produto/produto.component';
import { AddModalGrupoComponent } from './add-modal-grupo/add-modal-grupo.component';
import { AddModaSubGrupoComponent } from './add-moda-sub-grupo/add-moda-sub-grupo.component';
import { AddModalClienteComponent } from './add-modal-cliente/add-modal-cliente.component';
import { AddModalColecaoComponent } from './add-modal-colecao/add-modal-colecao.component';
import { AddModalProdutoComponent } from './add-modal-produto/add-modal-produto.component';
import { AddModalUsuarioComponent } from './add-modal-usuario/add-modal-usuario.component';
import { EditarModalProdutoComponent } from './editar-modal-produto/editar-modal-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashComponent,
    GroupComponent,
    UserComponent,
    SubgroupComponent,
    ModalGrupoComponent,
    ClienteComponent,
    ColecaoComponent,
    ProdutoComponent,
    AddModalGrupoComponent,
    AddModaSubGrupoComponent,
    AddModalClienteComponent,
    AddModalColecaoComponent,
    AddModalProdutoComponent,
    AddModalUsuarioComponent,
    EditarModalProdutoComponent
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports : [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
