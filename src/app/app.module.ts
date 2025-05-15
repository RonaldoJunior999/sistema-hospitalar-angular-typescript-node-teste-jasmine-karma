import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { DashboardMedicoComponent } from './dashboard-medico/dashboard-medico.component';
import { DashboardPacienteComponent } from './dashboard-paciente/dashboard-paciente.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { DetalhesConsultaComponent } from './detalhes-consulta/detalhes-consulta.component';

// Serviços
import { AuthService } from './services/auth.service';
import { MedicoService } from './services/medico.service';
import { PacienteService } from './services/paciente.service';
import { ConsultaService } from './services/consulta.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Componentes
    LoginComponent,
    CadastroComponent,
    CadastroMedicoComponent,
    CadastroPacienteComponent,
    DashboardMedicoComponent,
    DashboardPacienteComponent,
    AgendamentoComponent,
    PagamentoComponent,
    DetalhesConsultaComponent
  ],
})
export class AppModule { }

