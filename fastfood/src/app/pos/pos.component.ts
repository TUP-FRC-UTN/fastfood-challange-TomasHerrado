import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedidos } from '../Interfaces/pedidos';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  pedido : Pedidos = new Pedidos();

  private pedidoServiceInject = inject(PedidoService);

sendForm(form : NgForm) {
  if(form.valid) {
    console.log(this.pedido);
    this.pedidoServiceInject.addPush(this.pedido);
    this.pedido = new Pedidos();
  } else {
    alert('Faltan datos');
  }
}

}

