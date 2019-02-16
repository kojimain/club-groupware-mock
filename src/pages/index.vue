<template>
  <div id="wrap">
    <Header />
    <main>
      <section class="hero is-light is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column">
              <h1 class="title">
                ClubGroupware(仮)
              </h1>
              <h2 class="subtitle">
                クラブ・サークル活動の出欠確認やメンバー間交流ができるサービスです。
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/index/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
