import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {

  cosasLindas : any = []
  cosasFeas : any = []

  barChart : any;
  tortaChart : any;

  labelsFeos : any = [];
  labelsLindos : any = [];

  cantLikesFeos : any = []
  cantLikesLindos : any = []

  fotosFeas : any = [];
  fotosLindas : any = [];

  mostrarImagen = false;
  imagerParaMostrar : string = '';

  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  @ViewChild('torCanvas') private torCanvas!: ElementRef;

  constructor(private auth : AuthService,private db : DbService, private router: Router) { 
    
    this.db.traerCosas('lindas').subscribe(data =>{
      this.cosasLindas = data
      this.cargarChartLindos()
    });
    
    this.db.traerCosas('feas').subscribe(data =>{
      this.cosasFeas = data
      this.cargarChartFeos()
    });

  }

  ngOnInit() {
  }

  graficoTortas() {
    this.tortaChart = new Chart(this.torCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.labelsLindos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesLindos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Cosas Lindas'
          }
        }
      },
    });

    this.tortaChart.destroy();
    this.tortaChart = new Chart(this.torCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.labelsLindos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesLindos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Cosas Lindas'
          }
        }
      },
    });

  }

  graficoBarras() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelsFeos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesFeos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true,
              ticks:{
                stepSize:0.5
              }
          }
        }
      }
    });

    this.barChart.destroy();
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelsFeos,
        datasets: [{
          label: 'Cantidad de me gusta',
          data: this.cantLikesFeos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true,
              ticks:{
                stepSize:1
              }
          }
        }
      }
    });
  }

  cargarChartFeos() {
    let tempLabels = [];
    
    for (let i = 0; i < this.cosasFeas.length; i++) {
      tempLabels = this.cosasFeas[i].email.split('@');
      this.labelsFeos.push(tempLabels[0] + ' | ' + this.cosasFeas[i].fecha + this.cosasFeas[i].hora);
      this.cantLikesFeos.push(this.cosasFeas[i].likes.length);
      this.fotosFeas.push(this.cosasFeas[i].pathFoto);
    }
    this.graficoBarras();
  }

  cargarChartLindos() {
    let tempLabels = [];
    
    for (let i = 0; i < this.cosasLindas.length; i++) {
      tempLabels = this.cosasLindas[i].email.split('@');      
      this.labelsLindos.push(tempLabels[0] + ' | ' + this.cosasLindas[i].fecha + this.cosasLindas[i].hora);
      this.cantLikesLindos.push(this.cosasLindas[i].likes.length);
      this.fotosLindas.push(this.cosasLindas[i].pathFoto);
    }
    this.graficoTortas();
  }
  logout(){
    this.auth.logout();
    
    this.router.navigateByUrl("/login");
  }

}