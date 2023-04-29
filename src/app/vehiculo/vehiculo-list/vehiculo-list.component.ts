import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  items: { marca: string, count: number }[] = [];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  getNumberVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((data: any[]) => {

      const itemCounts = data.reduce((acc, curr) => {
      const index = acc.findIndex((item: any) => item.marca === curr.marca);
        if(index >= 0){
          acc[index].count++;
        }else{
            acc.push({ marca: curr.marca, count: 1});
          }
          return acc;

      }, []);
      this.items = itemCounts;

    });
  }

  ngOnInit() {
    this.getVehiculos();
    this.getNumberVehiculos();
  }

}
