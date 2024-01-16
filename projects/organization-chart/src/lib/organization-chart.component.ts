import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OrganizationChartService } from './organization-chart.service';

@Component({
  selector: 'ng-org-chart',
  template: `
    <canvas [height]="height" [width]="width" #ngOrgChartCanvas></canvas>
  `,
  styles: ``
})
export class OrganizationChartComponent implements AfterViewInit {

  @ViewChild('ngOrgChartCanvas')
  canvas?: ElementRef<HTMLCanvasElement>;

  @Input('height') height: number = 400;
  @Input('width') width: number = 600;

  private context?: CanvasRenderingContext2D;

  constructor(private _canvas: OrganizationChartService) {

  }

  ngAfterViewInit(): void {
    if (this.canvas) {
      this.context = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
      this._canvas.setContext(this.context);
    }

    this._canvas.drawRect(50, 50);
    this._canvas.drawRect(200, 50);
  }

}
