import { Injectable } from "@angular/core";
import { Pedidos } from "../Interfaces/pedidos";

@Injectable({
    providedIn: "root"
})
export class PedidoService {
    private ltsPedidos: Pedidos[] = [];
    private lstPedidosTerminados: Pedidos[] = [];
    private ltsPedidosTotales: Pedidos[] = [];

    addPush(p : Pedidos){
        this.ltsPedidos.push(p);
      }
    
      getPedidos(){
        return this.ltsPedidos;
      }
    
      deletePedidos(index: number){
        this.ltsPedidos.splice(index, 1);
      }

      savePedidoTerminado(pedido: Pedidos) {
        this.lstPedidosTerminados.push(pedido);
      }

      getPedidosTerminados() {
        return this.lstPedidosTerminados;
      }
      

}