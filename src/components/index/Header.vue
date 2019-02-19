<template>
  <header>
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="/img/logo.png" />
          <span>ClubGroupware(仮)</span>
        </router-link>
        <!-- <span class="navbar-burger burger" data-target="navbarMenu">
        <span></span>
        <span></span>
        <span></span>
      </span> -->
      </div>
      <div id="navbarMenu" class="navbar-menu is-active">
        <!-- keep active -->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <router-link to="/signup" class="button">
                  新規登録
                </router-link>
              </p>
              <p class="control">
                <router-link to="/login" class="button is-info">
                  ログイン
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 60px;
}
</style>
