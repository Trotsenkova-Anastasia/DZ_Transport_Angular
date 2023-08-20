import { Component } from '@angular/core';

@Component({
  selector: 'app-my-test-comp',
  templateUrl: './my-test-comp.component.html',
  styleUrls: ['./my-test-comp.component.css']
})
export class MyTestCompComponent {
public Name:string="Alex";
public myData:Date=new Date("07.02.2023");
public Car:number=210;
public Students:string[]=["Alex","Ann","Lina"];
public ToDoList:string[]=["some business for today","something for tomorrow","something for after tomorrow","something for the fourth day","some business on the fifth day"];
public isName():boolean
  {
    return this.Name=="Alex"
  }
public  isToday(day: Date): boolean {
    const today = new Date();
    return day.getFullYear() === today.getFullYear() &&
    day.getMonth() === today.getMonth() &&
    day.getDate() === today.getDate();
}
color:string ="";
changeColor(color:string)
  {
    this.color=color;
  }
}
