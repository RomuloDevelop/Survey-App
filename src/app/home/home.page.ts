import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  survey = this.fb.group({
    installDate: [''],
    installPlace: [''],
    conectionType: [''],
    vehiclePatent: [''],
    internNro: [''],
    vehicleModel: [''],
    vehicleBrand: [''],
    technicianName: [''],
    installedProduct: this.fb.group({
      checks: this.fb.array([]),
      other: ['']
    }),
    responsable: ['']
  });

  checkList = [
    'GPS TELEMETRÍA 0XCA',
    'GPS TELEMETRÍA 0XCH',
    'GPS TELEMETRÍA 0XGA+',
    'Otro:'
  ];

  inputFileList= [
    {
      title: 'FOTO DE LA INSTALACION PATENTE'
    },
    {
      title: 'FOTO DE LA INSTALACION TABLERO DE INSTRUMENTO PRE'
    },
    {
      title: 'FOTO DE LA INSTALACION TABLERO DE INSTRUMENTO POS'
    },
    {
      title: 'FOTO DE LA INSTALACION GPS'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.checkList.forEach( () => this.checks.push(this.fb.control(false)));
    console.log(this.checks);
  }

  get checks() {
    return this.survey.get('installedProduct.checks') as FormArray;
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
