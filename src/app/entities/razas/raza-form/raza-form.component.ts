import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Raza } from 'src/models/raza.model';
import { RazaServiceService } from 'src/services/raza-service.service';

@Component({
  selector: 'app-raza-form',
  templateUrl: './raza-form.component.html',
  styleUrls: ['./raza-form.component.scss']
})
export class RazaFormComponent implements OnInit {

  error: boolean = false;
  succes: boolean = false;
  mensaje: string = '';

  raza!: Raza;
  razaId!: number;
  modoAlta!: boolean;

  constructor(
    private razaService: RazaServiceService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.router.snapshot.paramMap.get('razaId')) {
      this.modoAlta = false;
      this.razaId = this.router.snapshot.params.razaId;
      this.cargarDatosRaza(this.razaId);
    } else {
      this.modoAlta = true;
      this.raza = new Raza();
    }
  }

  cargarDatosRaza(razaId: number): void {
    this.razaService.obtenerRaza(this.razaId).subscribe(
      (data: Raza) => {
        this.raza = data;
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos de la raza. Error: " + err.error;
        ;
        this.error = true;
      }

    );

  }

  guardar(): void {

    this.error = false;
    this.succes = false;
    this.mensaje = "";

    this.razaService.insertarRaza(this.raza).subscribe(
      (data: Raza) => {
        if (this.modoAlta) {
          this.mensaje = "Se ha guardado la raza con éxito ID: " + data.id;
          this.succes = true;
          this.raza = new Raza();
        } else {
          this.route.navigate(['/razas']);
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al guardar la poción, ERROR: " + err.error;
        this.error = true;
      }
    )

  }

}
