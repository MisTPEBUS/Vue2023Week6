<template>
  <div>
    這裡是 後台 產品管理
    <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openModal('new')">
          建立新的產品
        </button>
    </div>
    <table class="table mt-4 table-hover">
        <thead>
          <tr class="table-dark">
            <th width="120">
              分類
            </th>
            <th>產品名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-end">
              {{ item.origin_price }}
            </td>
            <td class="text-end">
              {{ item.price }}
            </td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    
    <user-product-modal />
    <pagination :pagination="pagination" :pages="pagination" :get-product-data="getProductData" @emit-pages="getProducts" />
    <alert-modal :success-alert="successAlert" :toast-msg="toastMsg" />
     <!-- Modal_delProductModal -->    
    <delete-product-model ref="deleteProduct" :temp-product="tempProduct" @del-product="delProduct"/>
  <!--   @del-product="delProduct"  -->
 </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import AlertModal from "@/components/AlertModal.vue"
import UserProductModal from "@/components/UserProductModal.vue";
import DeleteProductModel from "@/components/DeleteProductModel.vue";

export default {
  data() {
    return {
      pagination:[],
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      successAlert:false,
      toastMsg:'新增完成',
      modalVisable:true,
    };
  },
  components: {
    Pagination,
    UserProductModal,
    AlertModal,
    DeleteProductModel,
  },
  methods: {
    alertShow(){
      this.successAlert=true;
            setTimeout(() => 
            {
              this.successAlert=false;
            }
            , 3000); 
    },

    updateProduct() {
        //create Data
      this.toastMsg = '產品新增成功';
      let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
      let http = 'post';
      if (!this.isNew) {
        //update Data
        url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
        http = 'put';
        this.toastMsg = '產品更新成功';
      }
      console.log(this.tempProduct);
      this.axios[http](url, { data: this.tempProduct }).then((response) => {
        console.log(response);
        this.alertShow();
       /*  this.$refs.productModal.productModal.hide(); */
        this.getProductData();
      }).catch((err) => {
        alert(err.response.data.message);
      })
    },
    delProduct() {
      this.toastMsg = '產品刪除成功';     
      const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/admin/product/${this.tempProduct.id}`;
    
      this.axios.delete(url).then(() => {
      this.alertShow();
      this.$refs.deleteProduct.modal.hide();
      this.getProductData();
      }).catch((err) => {
        alert(err.response.data.message);
      })
    },

    getProductData(page,category) {
      /* const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`; */
      
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products?page=${page}`;
      this.axios.get(api,{params:{page:page,category:category, }}).then((response) => {
        this.products = response.data.products;
        this.pagination = response.data.pagination;
      }).catch((err) => {
        alert(err.response.data.message);
      })
    },

    getProducts(page = 1) {
      // API
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products?page=${page}`;
      this.$http
        .get(api)
        .then((response) => {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    openModal(isNew, item) {      
      this.isNew = false;
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.tempProduct = {};
        this.isNew = true;
     /*    this.$refs.productModal.productModal.show(); */
      }
      else if (isNew === 'edit') {
        this.tempProduct = { ...item };       
       /*  this.$refs.productModal.productModal.show(); */
      }
      else if (isNew === 'delete') {
        this.tempProduct = { ...item };
        this.$refs.deleteProduct.modal.show();
        
      }
    },
  },
  mounted() {
    this.getProducts();
   
  },
};
</script>