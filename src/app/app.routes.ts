import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { ForComponent } from './components/controlflow/for/for.component';
import { IfelseComponent } from './components/controlflow/ifelse/ifelse.component';
import { DefualtpipeComponent } from './components/Pipe/defualtpipe/defualtpipe.component';
import { TemplateformComponent } from './components/templateforms/templateform/templateform.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'emp-list',
        component:EmployeelistComponent
    },
    {
        path:'structural-directive',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-directive',
        component:AttributeDirectiveComponent
    },
    {
        path:'for',
        component:ForComponent
    },
    {
        path:'ifelse',
        component:IfelseComponent
    },
    {
        path:'defualtpipe',
        component:DefualtpipeComponent
    },
    {
        path:'templateform',
        component:TemplateformComponent
    }

];
