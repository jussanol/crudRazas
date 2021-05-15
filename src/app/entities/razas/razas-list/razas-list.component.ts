import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/models/raza.model';
import { RazaServiceService } from 'src/services/raza-service.service';

@Component({
  selector: 'app-razas-list',
  templateUrl: './razas-list.component.html',
  styleUrls: ['./razas-list.component.scss']
})
export class RazasListComponent implements OnInit {

  listaRazas: Raza[] = [];

  constructor(private razasService: RazaServiceService
  ) { }

  ngOnInit(): void {
    this.razasService.obtenerRazas().subscribe((razas: Raza[]) => {
      this.listaRazas = razas
    });
  }

}
