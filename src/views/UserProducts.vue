<template>
  <div>
    <h1>This is 產品列表頁面</h1>
    <VueLoading :active="isLoading" />
    <alert-modal :success-alert="successAlert" :toast-msg="toastMsg"> </alert-modal>
    <table class="table align-middle table-hover" >
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div style="height: 100px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              </td>
              <td>
                {{ item.title }}
              </td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.price">限時特價只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary" @click="$router.push(`/product/${item.id}`)"
                    :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled">
                    <i class="fas fa-spinner fa-pulse" v-if="loadingStatus.loadingItem === item.id"></i>
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger" @click="addToCart(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled">
                    <i class="fas fa-spinner fa-pulse" v-if="loadingStatus.loadingItem === item.id"></i>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    <UserProductModal ref="userProductModal" :product="product" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import UserProductModal from "@/components/UserProductModal.vue";
import AlertModal from "@/components/AlertModal.vue";
export default {
  data() {
    return {
      toastMsg:'',
      successAlert:false,
      products: [],
      loadingStatus: {
        loadingItem: "",
      },
      isLoading: false,
      product: {},
    };
  },
  components: {
    UserProductModal,
    AlertModal,
  },
  mounted() {
    this.getProducts();
    
  },
  methods: {
    alertShow(){
      this.successAlert=true;
            setTimeout(() => 
            {
              this.successAlert=false;
            }
            , 1000); 
    },
    addToCart(id, qty = 1) {
    
      this.toastMsg=''
      const url = `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/cart`;
      
      const cart = {
        product_id: id,
        qty,
      };
      this.axios
        .post(url, { data: cart })
        .then((response) => {
          this.toastMsg = response.data.message;
          this.alertShow();
         
          this.$refs.userProductModal.hideModal();
         
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getProducts() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/products`;
      this.$http
        .get(url)
        .then((response) => {
          this.products = response.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getProduct(id) {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/product/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http
        .get(url)
        .then((response) => {
          this.loadingStatus.loadingItem = "";
          this.product = response.data.product;
          this.isLoading = false;
          this.$refs.userProductModal.openModal();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>