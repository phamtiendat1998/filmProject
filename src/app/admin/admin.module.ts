import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { TrangchuAdminComponent } from './trangchu-admin/trangchu-admin.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { ChartModule } from '../../../node_modules/angular2-highcharts';
import { RouterModule } from '../../../node_modules/@angular/router';
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
@NgModule({
  imports: [
    CommonModule, ChartModule, RouterModule, FormsModule, NgxPaginationModule, Ng2SearchPipeModule, Ng2OrderModule
  ],
  declarations: [LoginAdminComponent, HeaderAdminComponent, AdminLayoutComponent, TrangchuAdminComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent],
  exports: [LoginAdminComponent, HeaderAdminComponent, AdminLayoutComponent, TrangchuAdminComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent]
})
export class AdminModule { }
