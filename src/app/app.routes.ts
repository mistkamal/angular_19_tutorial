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
import { ReactiveformComponent } from './components/templateforms/reactiveform/reactiveform.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { NgTemplateComponent } from './components/directive/ng-template/ng-template.component';
import { NgContainerComponent } from './components/directive/ng-container/ng-container.component';
import { ViewchildComponent } from './components/decorators/viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';
import { SignalComponent } from './components/signal/signal.component';

export const routes: Routes = [
    //defualt rout
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'add-emp',
                component: AddEmployeeComponent
            },
            {
                path: 'data-binding',
                component: DataBindingComponent,
                canActivate:[authGuard]
            },
            {
                path: 'emp-list',
                component: EmployeelistComponent
            },
            {
                path: 'structural-directive',
                component: StructuralDirectiveComponent
            },
            {
                path: 'attribute-directive',
                component: AttributeDirectiveComponent
            },
            {
                path: 'for',
                component: ForComponent
            },
            {
                path: 'ifelse',
                component: IfelseComponent
            },
            {
                path: 'defualtpipe',
                component: DefualtpipeComponent
            },
            {
                path: 'templateform',
                component: TemplateformComponent
            },
            {
                path: 'reactiveform',
                component: ReactiveformComponent
            }
            ,
            {
                path: 'getapi',
                component: GetApiComponent
            }
            ,
            {
                path: 'postapi',
                component: PostApiComponent
            },
            {
                path: 'ngtempalte',
                component: NgTemplateComponent
            },
            {
                path: 'ngcontainer',
                component: NgContainerComponent
            },
            {
                path: 'viewChild',
                component: ViewchildComponent
            },
            {
                path: 'signal',
                component: SignalComponent
            }
        ]
    }

];
