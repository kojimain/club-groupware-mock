<template>
  <div id="wrap">
    <main>
      <section class="hero is-light is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <img src="/img/logo.png" width="96" height="96" />
              <div class="box">
                <form action="/">
                  <div class="field">
                    <div class="control">
                      <label class="label">メールアドレス</label>
                      <input
                        class="input"
                        type="email"
                        placeholder="Email"
                        autofocus
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <label class="label">パスワード</label>
                      <input
                        class="input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <label class="label">パスワード(確認)</label>
                      <input
                        class="input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <button
                    class="button is-block is-primary is-large is-fullwidth"
                  >
                    登録
                  </button>
                </form>
              </div>
              <p class="has-text-grey">
                <router-link to="/login">ログインページに戻る</router-link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: {
    Footer
  }
};
</script>
