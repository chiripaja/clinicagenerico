import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],
  providers: [DatePipe]
})
export class FechaComponent {
  fechaHora: string = '';
  intervalId: any;

  constructor(private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.actualizarFechaHora();

    // Actualiza la fecha y hora cada segundo
    this.intervalId = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  actualizarFechaHora(): void {
    const fechaActual = new Date('2024-06-26T08:15:20'); // Esta es la fecha base
    fechaActual.setSeconds(fechaActual.getSeconds() + (Date.now() - fechaActual.getTime()) / 1000); // Para hacerla dinámica
    this.fechaHora = this.datePipe.transform(fechaActual, 'dd MMMM yyyy, h:mm:ss a')!;
  }

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente es destruido
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
