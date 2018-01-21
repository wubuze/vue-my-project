<template>
  <div id="login">

    <div class="form">

      <el-form >
        <el-form-item :label-position="right" label="账户"  label-width="50px">
          <el-input placeholder="" ></el-input>
        </el-form-item>

        <el-form-item :label-position="right" label="密码" label-width="50px" >
          <el-input placeholder=""></el-input>
        </el-form-item>

        <el-button type="primary">登入</el-button>
      </el-form>
    </div>


  </div>

</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

  #login {
    height: 100%;
    position: relative;
    background-color: darkgray;

  }
   #login .form {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 380px;
     height: 380px;
     margin-top: -190px;
     margin-left: -190px;
     background-color: #fff;
     border-radius: 10px;

   }
  .form .el-form {
    padding: 50px;
    margin-top: 20px;
    border-radius: 10px;

  }

  #login .form .el-form button{
    width: 300px;
    margin-top: 20px;
  }



</style>
