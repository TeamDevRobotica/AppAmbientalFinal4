import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Institucion } from 'src/app/modelo/Institucion';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitucionService } from 'src/app/servicios/institucion.service';


@Component({
  selector: 'app-admin-instituciones',
  templateUrl: './admin-instituciones.component.html',
  styleUrls: ['./admin-instituciones.component.sass']
})
export class AdminInstitucionesComponent implements OnInit {

  public displayedColumns = ['id', 'descripcion', 'cue', 'graficos', 'actualizar', 'eliminar'
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public dataSource = new MatTableDataSource<Institucion>();

  constructor(
    private institucionService: InstitucionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.institucionService.getInstituciones().subscribe(inst => {
      this.dataSource.data = inst;
    });
  }

  redirectToGraficos(id: string) {
    this.router.navigate(['/lista', id]);
  }

  redirectToActualizar(id: string) {

  }

  redirectToEliminar(id: string) {

  }

  irAgregar() {
    this.router.navigate(['./adminInstitucionNuevo']);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
