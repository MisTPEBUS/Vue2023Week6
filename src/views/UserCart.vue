<template>
  <div class="about">
    <VueLoading :active="isLoading" />
    <h1>This is 購物車頁面</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="text-end">
          <button class="btn btn-outline-danger" type="button" @click="deleteAllCarts">清空購物車</button>
        </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 210px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="removeCartItem(item.id)"
                      :disabled="loadingStatus.loadingItem === item.id"
                    >
                      <i
                        class="fas fa-spinner fa-pulse"
                        v-if="loadingStatus.loadingItem === item.id"
                      ></i>
                      移除購物車
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                    <div class="input-group mb-3 ">
                      <button type="button"   class="btn btn-danger" @click="item.qty=item.qty+1,updateCart(item)">+</button>
                      <input v-model.number="item.qty" @blur="updateCart(item)"
                        :disabled="loadingStatus.loadingItem === item.id" min="1" type="number" class="form-control">
                       <button type="button"  :disabled="item.qty<2"  class="btn btn-danger" @click="item.qty=item.qty-1,updateCart(item)">-</button>
                      <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                    </div>
                  </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ item.final_total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cart.total }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="my-5 row justify-content-center">
        <VeeForm
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <VeeField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <VeeField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <VeeField
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required"
              v-model="form.user.tel"
            />
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <VeeField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            />
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </VeeForm>
      </div>
    </div>
    <alert-modal :success-alert="successAlert" :toast-msg="toastMsg"> </alert-modal>
  </div>
</template>

<script>
import AlertModal from "@/components/AlertModal.vue";
export default {
  data() {
    return {
      toastMsg:'',
      successAlert:false,
      loadingStatus: {
        loadingItem: "",
      },
      isLoading: false,
      cart: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          message:'',
        },
        message: "",
      },
      coupon_code: "",
    };
  },
  components: {
    
    AlertModal,
  },
  mounted() {
    this.getCart();
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
    updateCart(data) {
      this.loadingStatus.loadingItem = data.id;
     
      const url =  `${import.meta.env.VITE_API}/api/${import.meta.env.VITE_PATH}/cart/${data.id}`;
      const cart = {
        product_id: data.product_id,
        qty: data.qty,
      };
      this.axios.put(url, { data: cart }).then((response) => {
        this.toastMsg = response.data.message;
        this.alertShow();
        this.loadingStatus.loadingItem = '';
        this.getCart();
      }).catch((err) => {
        alert(err.response.data.message);
        this.loadingStatus.loadingItem = '';
      });
    },
    getCart() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.cart = response.data.data;
          this.isLoading = false;
        } else {
          alert(response.data.message);
        }
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${id}`;
      this.loadingStatus.loadingItem = id;
      this.axios
        .delete(url)
        .then((response) => {
          this.toastMsg = response.data.message;
        this.alertShow();
        this.loadingStatus.loadingItem = '';
        this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      this.loadingStatus.loadingItem = "";
      this.isLoading = false;
    },
    createOrder() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order`;
      const order = this.form;
      this.$axios
        .post(url, { data: order })
        .then((response) => {
          this.toastMsg = response.data.message;
          this.alertShow();
        
          this.$refs.form.resetForm();
         
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>