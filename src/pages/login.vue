<template>
  <div id="wrap">
    <main>
      <section class="hero is-light is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <img src="/img/logo.png" width="96" height="96" />
              <div class="box">
                <form action="/member">
                  <div class="field">
                    <div class="control">
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
                      <input
                        class="input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" />
                      ログイン状態を記憶する
                    </label>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth">
                    Login
                  </button>
                </form>
              </div>
              <p class="has-text-grey">
                <router-link to="/signup">新規登録</router-link>
              </p>
              <p class="has-text-grey">
                <router-link to="/forget">パスワードをお忘れの方</router-link>
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
