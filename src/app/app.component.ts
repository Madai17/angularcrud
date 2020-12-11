import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  employeeArray: Employee[] = [
    {id: 1, name: 'Lucas', country: 'USA'},
    {id: 2, name: 'Pedro', country: 'Peru'},
    {id: 3, name: 'Fernando', country: 'Bolivia'},
   ];

   selectedEmployee: Employee = new Employee();

   // tslint:disable-next-line: typedef
   openForEdit(employee: Employee){
      this.selectedEmployee = employee;
   // tslint:disable-next-line: typedef
   }
   
   update(){
  
     this.selectedEmployee = new Employee();
   }
   add(){
    if (this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
     }
   
  }
   delete(){
     if (confirm('¿Estas seguro que deseas eliminar?')) {
      this.employeeArray = this.employeeArray.filter(x => x!= this.selectedEmployee)
      this.selectedEmployee = new  Employee();
     }
  }
}
