import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from "./pos/pos.component";
import { Pedidos } from './Interfaces/pedidos';
import { PedidoService } from './services/pedido.service';
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponent, AppComponent, DeliveryPointComponent, KitchenComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
  lstPedidosTotales: Pedidos[] = [];

  private pedidoServiceInject = inject(PedidoService);

  ngOnInit(): void {
    this.getPedidosTotales();
  }
  getPedidosTotales() {
    this.lstPedidosTotales = this.pedidoServiceInject.getPedidos();
  }
}
