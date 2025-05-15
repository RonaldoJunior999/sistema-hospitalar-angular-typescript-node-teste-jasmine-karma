import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de página
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';
import { DashboardPacienteComponent } from './dashboard-paciente/dashboard-paciente.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { DetalhesConsultaComponent } from './detalhes-consulta/detalhes-consulta.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login e Cadastro
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/medico', component: CadastroMedicoComponent },
  { path: 'cadastro/paciente', component: CadastroPacienteComponent },

  // Dashboards
  { path: 'dashboard/medico', component: DashboardMedicoComponent },
  { path: 'dashboard/paciente', component: DashboardPacienteComponent },

  // Agendamento e Pagamento
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'pagamento', component: PagamentoComponent },

  // Detalhes da consulta
  { path: 'consulta/:id', component: DetalhesConsultaComponent },

  // Rota coringa (caso tente acessar algo inexistente)
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
