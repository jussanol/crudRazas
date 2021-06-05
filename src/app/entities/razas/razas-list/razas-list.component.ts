import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/models/raza.model';
import { RazaServiceService } from 'src/services/raza-service.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';



@Component({
  selector: 'app-razas-list',
  templateUrl: './razas-list.component.html',
  styleUrls: ['./razas-list.component.scss']
})
export class RazasListComponent implements OnInit {

  listaRazas: Raza[] = [];
  razaEliminar!: number;
  mensaje: String = "";
  error: boolean = false;

  constructor(private razasService: RazaServiceService
  ) { }

  ngOnInit(): void {
    this.razasService.obtenerRazas().subscribe((razas: Raza[]) => {
      this.listaRazas = razas
    });
  }

  prepararEliminar(razaId: number) {
    this.razaEliminar = razaId;
  }

  eliminar(razaId: number) {
    this.razasService.eliminarRaza(razaId).subscribe(
      (data: Raza) => {
        this.razasService.obtenerRazas().subscribe((data: Raza[]) => { this.listaRazas = data });
      },
      (err) => {
        this.mensaje = "Se produjo un error al borrar la raza. Error: " + err.error;
        this.error = true;
      }
    )
  }

}
