import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pedidos } from '../Interfaces/pedidos';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [RouterOutlet, DeliveryPointComponent],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  lstPedidosEntregar: Pedidos[] = [];

  private pedidoServiceInject = inject(PedidoService)

  ngOnInit(): void {
      this.getEntregar();
  }
  getEntregar() {
    this.lstPedidosEntregar= this.pedidoServiceInject.getPedidosTerminados();
  }

  eliminarPedido(index: number) {
    if(confirm('¿Deseas entregar el pedido?'))
    this.pedidoServiceInject.deletePedidos(index);
    this.lstPedidosEntregar.splice(index, 1);
  }

}
