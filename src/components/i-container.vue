<template>
  <div style="width: 60%;">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<style lang="scss">
$font_color: #333;
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: $font_color;
  text-align: center;
  /* line-height: 60px; */
}

.el-aside {
  background-color: #D3DCE6;
  color: $font_color;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #E9EEF3;
  color: $font_color;
  text-align: center;
  /* line-height: 160px; */
}
.el-container {
    margin-bottom: 40px;
}
</style>
