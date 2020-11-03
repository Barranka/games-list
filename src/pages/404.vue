<template>
  <div class="container-content">
    <section>
      <div class="container">
        <h1 class="title">Страница не найдена!</h1>
		    <div>Вернуться <router-link class="link" to="/"> на главную?</router-link></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.container {
  margin: 50px auto;
  height: 60vh;
  display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
  text-align: center;
  font-size: 30px;
  .link {
    color: #103D97;
  }
}

</style>