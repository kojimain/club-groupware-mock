<template>
  <header>
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/img/logo.png" />
          <span>ClubGroupware(仮)</span>
        </a>
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
                <a href="/signup" class="button">
                  新規登録
                </a>
              </p>
              <p class="control">
                <a href="/login" class="button is-info">
                  ログイン
                </a>
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
