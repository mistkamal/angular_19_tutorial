import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
isuserloggedIn:boolean=true;
loogeduserName:string="Kamal";

@ViewChild('forpara') forpara : TemplateRef<any> | undefined;
@ViewChild('forparacontainer',{read:ViewContainerRef}) forparaconatiner : ViewContainerRef | undefined;

loadtemplate(){
  if(this.forpara)
    {
      debugger
      this.forparaconatiner?.createEmbeddedView(this.forpara)
    }
}
}
