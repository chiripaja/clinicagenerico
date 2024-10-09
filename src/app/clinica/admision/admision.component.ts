import { Component } from '@angular/core';

@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
  styleUrls: ['./admision.component.css']
})
export class AdmisionComponent {
  pacientes = [
    { id: 1, nombre: 'MERCEDES MARIA LÓPEZ GONZÁLEZ', edad: '23 años', sexo: 'femenino', ff: 'Particular', motivo: 'Consulta Medica', celular: '958785451', direccion: 'Jr. Huanuco N° 320' },
    { id: 2, nombre: 'FRANCISCA ANA RIVERA AGUERO', edad: '35 años', sexo: 'masculino', ff: 'Particular', motivo: 'Consulta Medica', celular: '958478124', direccion: 'Jr. Dos de Mayo N° 120' },
    { id: 3, nombre: 'BRAYAN MANUEL RAMOS ESPINOZA', edad: '16 años', sexo: 'femenino', ff: 'Seguro', motivo: 'Procedimiento', celular: '958785451', direccion: 'Jr. Huanuco N° 520' },
    { id: 4, nombre: 'FLORELI VILLANUEVA RAMIREZ', edad: '22 años', sexo: 'femenino', ff: 'Particular', motivo: 'Consulta Medica', celular: '998857884', direccion: 'Jr. Dos de Mayo N° 720' },
    { id: 5, nombre: 'CARME AGUSTA HIDALGO CABANILLAS', edad: '45 años', sexo: 'masculino', ff: 'Seguro', motivo: 'Procedimiento', celular: '958785451', direccion: 'Jr. Aguilar N° 320' },
    { id: 6, nombre: 'FRANK MARTIN ALVARADO RIVERA', edad: '41 años', sexo: 'masculino', ff: 'Particular', motivo: 'Consulta Medica', celular: '996847231', direccion: 'Jr. Huanuco N° 320' },
  ];
  
}
