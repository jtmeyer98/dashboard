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
export default {
  data() {
    return {
      expanded: null,
      purchaseRequests: [
        {
          id: 1,
          requester: 'John Doe',
          description: 'Necesidad de nuevos equipos para el departamento de IT',
          date: '2024-01-15',
          type: 'Tecnología',
          status: 'Aprobado',
          request_lines: [
            { id: 101, product: 'Computadora Portátil', quantity: 10, price: 1200, currency: 'USD' },
            { id: 102, product: 'Monitor LED 24"', quantity: 10, price: 150, currency: 'USD' }
          ]
        },
        {
          id: 2,
          requester: 'Alice Johnson',
          description: 'Material de oficina para el nuevo trimestre',
          date: '2024-02-20',
          type: 'Oficina',
          status: 'Pendiente',
          request_lines: [
            { id: 201, product: 'Paquete de papel A4', quantity: 50, price: 3, currency: 'USD' },
            { id: 202, product: 'Cartuchos de tinta', quantity: 20, price: 35, currency: 'USD' }
          ]
        },
        {
          id: 3,
          requester: 'Michael Smith',
          description: 'Renovación de software antivirus',
          date: '2024-03-05',
          type: 'Software',
          status: 'Rechazado',
          request_lines: [
            { id: 301, product: 'Licencia de antivirus', quantity: 100, price: 50, currency: 'USD' }
          ]
        },
        {
          id: 4,
          requester: 'Linda Brown',
          description: 'Equipos para el nuevo laboratorio de química',
          date: '2024-04-18',
          type: 'Laboratorio',
          status: 'Aprobado',
          request_lines: [
            { id: 401, product: 'Microscopios', quantity: 5, price: 800, currency: 'USD' },
            { id: 402, product: 'Balanzas digitales', quantity: 5, price: 200, currency: 'USD' }
          ]
        }
      ]
    };
  },
  methods: {
    toggleDetails(id) {
      this.expanded = this.expanded === id ? null : id;
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
