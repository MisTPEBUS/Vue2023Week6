<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="login">
          <div class="login-triangle"></div>
          <h2 class="login-header">後台管理系統</h2>
          <form class="login-container" @submit.prevent="login">
            
            <div class="form-floating mb-3 myTextField">
              <input type="email" class="form-control" v-model="user.username" id="floatingInput"
                placeholder="ex: hello@example.com" required autofocus>
              <label for="floatingInput">請輸入帳號</label>
            </div>
            <div class="form-floating myTextField">
              <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
                placeholder="Password" required>
              <label for="floatingPassword">請輸入密碼</label>
            </div>
            <div class="form-check ">
              <input class="form-check-input" type="checkbox"  id="flexCheckChecked" :checked="isStoreAccount" @change="isStoreAccount = !isStoreAccount">
              <label class="form-check-label" for="flexCheckChecked">
                是否紀錄帳號
              </label>
            </div>
            <button class="btn  btn-lg btn-index w-100 mt-3" type="button" @click="goIndex()">
              回首頁
            </button>
            <button class="btn  btn-lg btn-login w-100 mt-3" type="submit">
              登入
            </button>
            
          </form>
        </div>
      </div>
     
      <p class="mt-5 mb-3 text-white ">
        &copy; 2023~∞ - 六角學院
      </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {username:'', password:''},
      isStoreAccount:false,
    };
  },
  methods: {
    login() {
      const api = `${import.meta.env.VITE_API}admin/signin`;
      this.axios.post(api, this.user).then((response) => {
      const { token, expired } = response.data;
       // 寫入 cookie token  expires 設置有效時間
      this.$cookies.set('token', token, { expires: expired });
      if(this.isStoreAccount)
      {
        this.$cookies.set('username', this.user.username, { expires: expired }); 
        this.$cookies.set('isStoreAccount', this.isStoreAccount, { expires: expired }); 
      }
      else{
        this.$cookies.remove('username'); 
        this.$cookies.remove('isStoreAccount'); 
      }
    
    
       this.$router.push("/admin/products");
     }).catch((err) => {
       console.log(err)
       alert(err.response.data.message);
     });
   },
    
    goIndex(){
      this.$router.push('/');
    }
  },
  mounted() {
    document.body.classList.add('loginBody');
    this.user.username = this.$cookies.get('username'); 
    this.isStoreAccount = (this.isStoreAccount === undefined)? false: true; 
   
},
  beforeUnmount() {
    document.body.classList.remove('loginBody');
  },
 
};
</script>
<style >

.loginBody { 
  height: 100%;
  text-align: center;
}

.loginBody {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E9C46A;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}


.login {
width: 400px;
margin: 16px auto;
font-size: 16px;
}


.login-header,
.login p {
margin-top: 0;
margin-bottom: 0;
}


.login-triangle {
width: 0;
margin-right: auto;
margin-left: auto;
border: 12px solid transparent;
border-bottom-color: #2A9D8F;
}

.login-header {
background: #2A9D8F;
padding: 20px;
font-size: 1.4em;
font-weight: normal;
text-align: center;
text-transform: uppercase;
color: #fff;
}


.login-container {
background: #ebebeb;
padding: 12px;
}

.login p {
padding: 12px;
}

.btn-index{
background-color: #3dc0af;
}
.btn-index:hover {
box-shadow: 0 0 0 0.25rem #1fddc4;
background-color: #61f4e0;
}

.btn-login{
background-color: #F4A261;
}
.btn-login:hover {
box-shadow: 0 0 0 0.25rem #e19658;
background-color: #f4c6a0;
}

.form-check{
  text-align: left;
  margin-top: 1rem;
}

.myTextField  input {
box-sizing: border-box;
display: block;
width: 100%;
border-width: 1px;
border-style: solid;
padding: 16px;
outline: 0;
font-family: inherit;
font-size: 0.95em;
}

</style>