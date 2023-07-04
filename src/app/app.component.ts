import { Component, OnInit } from '@angular/core';
import { myAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimations],
})
export class AppComponent implements OnInit {
  title = 'menu-directive';

  public menus: any = [
    {
      name: 'Dashboard',
      url: 'dashboard',
      icon: 'ti-dashboard',
      sub_modules: [],
    },
    {
      name: 'Self Configuration',
      url: 'self-config',
      icon: 'ti-settings',
      sub_modules: [],
    },

    {
      name: 'Demo Pages',
      url: '',
      icon: 'ti-info-alt',
      sub_modules: [
        {
          name: 'Form Elements',
          url: 'form-elements',
        },
        {
          name: 'Demo Datatable',
          url: 'table-demo',
        },
        {
          name: 'Multi Step Form',
          url: 'multistep-form',
        },
      ],
    },
    {
      name: 'Tracking',
      url: '',
      icon: 'ti-map-alt',
      sub_modules: [
        {
          name: 'Consignment Tracking',
          url: 'tracking/consignment-tracking',
        },
        {
          name: 'Employee Tracking',
          url: 'tracking/employee-tracking',
        },
        {
          name: 'Vehicle Tracking',
          url: 'tracking/vehicle-tracking',
        },
      ],
    },

    {
      name: 'Branches',
      url: '',
      icon: 'ti-vector',
      sub_modules: [
        {
          name: 'Branch Details',
          url: 'branches/branch-details',
        },
      ],
    },
    {
      name: 'System Configure',
      url: '',
      icon: 'ti-star',
      sub_modules: [
        {
          name: 'Category Fields',
          url: 'system-configure/category-fields',
        },
      ],
    },
    {
      name: 'Users',
      url: '',
      icon: 'ti-face-smile',
      sub_modules: [
        {
          name: 'Roles List',
          url: 'users/roles-list',
        },
        {
          name: 'Users List',
          url: 'users/users-list',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
