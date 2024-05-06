<template>
  <div class="container mt-5">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Solicitante</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in purchaseRequests" :key="request.id">
          <td>{{ request.requester }}</td>
          <td>{{ request.description }}</td>
          <td>{{ request.date }}</td>
          <td>{{ request.type }}</td>
          <td>{{ request.status }}</td>
          <td>
            <button class="btn btn-info" @click="toggleDetails(request.id)">Detalles</button>
          </td>
          <template v-if="expanded === request.id">
          <tr v-for="line in request.request_lines" :key="line.id">
            <td colspan="6">
              <div class="details">
                <p><strong>Producto:</strong> {{ line.product }}</p>
                <p><strong>Cantidad:</strong> {{ line.quantity }}</p>
                <p><strong>Precio:</strong> {{ line.price }}</p>
                <p><strong>Moneda:</strong> {{ line.currency }}</p>
              </div>
            </td>
          </tr>
        </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      expanded: null,
      purchaseRequests: []
    };
  },
  mounted() {
    this.fetchPurchaseRequests();
  },
  methods: {
    toggleDetails(id) {
      this.expanded = this.expanded === id ? null : id;
    },
    fetchPurchaseRequests() {
      // axios.get('http://localhost:8000/api/purchase_requests/')
      axios.get('https://api-manager-x6lx.onrender.com/api/purchase_requests/') // al sacar la s de http, se puede ver el error en la consola del navegador
        .then(response => {
          this.purchaseRequests = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the purchase requests:', error);
        });
    }
  }
}
</script>

<style>
.details {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
}
</style>
