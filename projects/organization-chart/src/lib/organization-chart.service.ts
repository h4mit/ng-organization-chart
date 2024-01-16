import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationChartService {

  private ctx: CanvasRenderingContext2D | any;

  constructor() { }

  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  drawRect(x: number, y: number, width: number = 100, height: number = 50): void {
    this.ctx.strokeRect(x, y, width, height);
  }
}
