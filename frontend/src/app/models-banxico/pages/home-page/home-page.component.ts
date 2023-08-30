import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiBanxicoService } from 'src/app/services/api-banxico.service';

@Component({
  selector: 'models-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  data: any[] = []

  constructor(private apiBanxico: ApiBanxicoService) { }

  toppings = new FormControl('');

  toppingList: string[] = [];

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.apiBanxico.getData().subscribe(data => {
      this.data = data;
      console.log(data.bmx.sectores[2].descripcion)
    });
  }

}
