import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pedidos } from '../Interfaces/pedidos';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [RouterOutlet, KitchenComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit {
  lstPedidosPendientes: Pedidos[] = [];
  lstPedidoEnCoccion: Pedidos | null = null;

  private pedidoServiceInject = inject(PedidoService);

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos() {
    this.lstPedidosPendientes = this.pedidoServiceInject.getPedidos();
  }

  cocinar(index: number) {
    if (this.lstPedidoEnCoccion === null) {
      this.lstPedidoEnCoccion = this.lstPedidosPendientes.splice(index, 1)[0];
    }
  }

  finalizarPedido() {
    if (this.lstPedidoEnCoccion) {
      this.pedidoServiceInject.savePedidoTerminado(this.lstPedidoEnCoccion);
      this.lstPedidoEnCoccion = null;
    }
  }
}
