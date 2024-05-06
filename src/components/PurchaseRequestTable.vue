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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage <= 1 }">
          <button class="page-link" @click="currentPage--" :disabled="currentPage <= 1">Anterior</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
          <button class="page-link" @click="currentPage++" :disabled="currentPage >= pageCount">Siguiente</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      expanded: null,
      purchaseRequests: [],
      allRequests: [],
      currentPage: 1,
      perPage: 10,
      pageCount: 0,
    };
  },
  mounted() {
    this.fetchPurchaseRequests();
  },
  methods: {
    fetchPurchaseRequests() {
      axios.get('https://api-manager-x6lx.onrender.com/api/purchase_requests/')
        .then(response => {
          this.allRequests = response.data;
          this.pageCount = Math.ceil(this.allRequests.length / this.perPage);
          this.updatePage();
        })
        .catch(error => {
          console.error('There was an error fetching the purchase requests:', error);
        });
    },
    updatePage() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      this.purchaseRequests = this.allRequests.slice(start, end);
    },
    toggleDetails(id) {
      this.expanded = this.expanded === id ? null : id;
    }
  },
  watch: {
    currentPage() {
      this.updatePage();
    },
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
