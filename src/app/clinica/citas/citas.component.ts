import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
 
})
export class CitasComponent {
  pacientes = [
    { id: 1, nombre: 'MERCEDES MARIA LÓPEZ GONZÁLEZ', fecha: '26/06/2024', hora: '8:15 am', medico: 'Dr. Fernando Ramos', servicio: 'Consulta Medica-Gastroenterología', consultorio: 'GASTRO - 1', totalPagado: 'S/. 150.00' },
    { id: 2, nombre: 'FRANCISCA ANA RIVERA AGUERO', fecha: '26/06/2024', hora: '8:30 am', medico: 'Dr. Fernando Ramos', servicio: 'Consulta Medica-Gastroenterología', consultorio: 'GASTRO - 1', totalPagado: 'S/. 210.00' },
    { id: 3, nombre: 'BRAYAN MANUEL RAMOS ESPINOZA', fecha: '26/06/2024', hora: '8:45 am', medico: 'Dr. Fernando Ramos', servicio: 'Consulta Medica-Gastroenterología', consultorio: 'GASTRO - 1', totalPagado: 'S/. 120.00' },
    { id: 4, nombre: 'FLORELI VILLANUEVA RAMIREZ', fecha: '26/06/2024', hora: '9:00 am', medico: 'Dr. Fernando Ramos', servicio: 'Consulta Medica-Gastroenterología', consultorio: 'GASTRO - 1', totalPagado: 'S/. 160.00' },
    { id: 5, nombre: 'CARME AGUSTA HIDALGO CABANILLAS', fecha: '26/06/2024', hora: '9:15 am', medico: 'Dr. Fernando Ramos', servicio: 'Consulta Medica-Gastroenterología', consultorio: 'GASTRO - 1', totalPagado: 'S/. 170.00' },
    { id: 6, nombre: 'FRANK MARTIN ALVARADO RIVERA', fecha: '26/06/2024', hora: '9:30 am', medico: 'Dr. Fernando Ramos', servicio: 'Consulta Medica-Gastroenterología', consultorio: 'GASTRO - 1', totalPagado: 'S/. 190.00' },
  ];
  

 
}
