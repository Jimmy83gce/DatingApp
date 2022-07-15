import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any; // Zmienna users dowolnego typu

  constructor(private http: HttpClient){}
  
  ngOnInit(): void { //funkcja i jaki zwracany typ
    this.getUsers();
  }

  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(response =>{
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}
