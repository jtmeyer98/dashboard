<template>
    <div>
      <h1>Purchase Requests</h1>
      <purchase-request-table :purchaseRequests="purchaseRequests" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import PurchaseRequestTable from '@/components/PurchaseRequestTable.vue';
  
  export default {
    components: {
      PurchaseRequestTable
    },
    data() {
      return {
        purchaseRequests: []
      };
    },
    created() {
      this.fetchPurchaseRequests();
    },
    methods: {
      fetchPurchaseRequests() {
        axios.get('https://api-manager-x6lx.onrender.com/api/purchase_requests/')
          .then(response => {
            this.purchaseRequests = response.data;
          })
          .catch(error => {
            console.error('Error fetching purchase requests:', error);
          });
      }
    }
  }
  </script>
  