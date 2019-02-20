<template>
  <div id="wrap">
    <main>
      <section class="hero is-light is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <img src="/img/logo.png" width="96" height="96" />
              <div class="box">
                <form action="/login">
                  <div class="field">
                    <p>
                      パスワード再発行メールをお送りします。
                    </p>
                  </div>
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
                  <button
                    class="button is-block is-primary is-large is-fullwidth"
                  >
                    送信
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
