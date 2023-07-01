import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  public FullName:string="Trotsenkova Anatasiia Valeriivna";
  public Phone:string="065-454-45-45";
  public E_Mail:string="ans@gmail.com";
  public City:string="Khmelnytskyi";
  public Experience:string="----";
  public Skills:string="----";
}
