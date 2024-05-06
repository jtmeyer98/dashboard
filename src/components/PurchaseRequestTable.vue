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
    <!-- Pagination Controls -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click="changePage(currentPage - 1)">Previous</a>
        </li>
        <li class="page-item" :class="{ active: page === currentPage }" v-for="page in totalPages" :key="page">
          <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click="changePage(currentPage + 1)">Next</a>
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
      currentPage: 1,
      perPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.purchaseRequests.length / this.perPage);
    },
    paginatedRequests() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.purchaseRequests.slice(start, end);
    }
  },
  mounted() {
    this.fetchPurchaseRequests();
  },
  methods: {
    toggleDetails(id) {
      this.expanded = this.expanded === id ? null : id;
    },
    fetchPurchaseRequests() {
      axios.get('https://api-manager-x6lx.onrender.com/api/purchase_requests/') // configuración para producción
        .then(response => {
          console.log('Purchase requests:', response.data);
          this.purchaseRequests = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the purchase requests:', error);
        });
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
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
