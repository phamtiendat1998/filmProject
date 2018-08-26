import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../Model/Phim';
import { TransformTrailerService } from '../../services/transform-trailer.service';
import { PopupTrailerComponent } from '../popup-trailer/popup-trailer.component';


@Component({
  selector: 'app-chi-tiet-phim-layouts',
  templateUrl: './chi-tiet-phim-layouts.component.html',
  styleUrls: ['./chi-tiet-phim-layouts.component.css']
})
export class ChiTietPhimLayoutsComponent implements OnInit {
  @ViewChild(PopupTrailerComponent) popupTrailer: PopupTrailerComponent;
  public maPhim: string;
  public phim: Phim;
  public statusTrailer: boolean = true;
  public st: boolean = false;
  public trailer: string;
  public popupTraler = [];
  constructor(private Activate: ActivatedRoute, private phimSV: PhimService, private transURL: TransformTrailerService) { }
  ngOnInit() {
    this.Activate.params.subscribe(
      (kq: any) => {
        this.maPhim = kq['maphim'];
        this.phimSV.layChiTietPhim(this.maPhim).subscribe(
          (kq: any) => {
            this.phim = kq;
            console.log(kq);
          }
        )
      }
    )
  }
  UrlTrailer(url: string, ten: string) {
    if (url.search('watch') !== -1) {
      let mangTrailer = url.split('watch?v=');
      this.trailer = mangTrailer[0] + 'embed/' + mangTrailer[1] + '?autoplay=1&showinfo=0&controls=0';
      this.popupTraler = [this.trailer, ten, this.statusTrailer];
    } else {
      this.popupTraler = [this.trailer, ten, this.statusTrailer];
    }
    this.transURL.TransformURL(this.popupTraler);
  }
  closeTrailer() {
    this.popupTrailer.close(this.st);
  }
}