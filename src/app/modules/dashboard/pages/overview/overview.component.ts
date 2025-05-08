import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {

  constructor(
    private Title: Title
  ){}

  ngOnInit(): void {
    this.Title.setTitle(`Dashboard - ${appName}`);
  }

}
