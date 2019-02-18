<template>
  <Header>
    <div slot="navbar-start" class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a href="/member/clubs/123" class="navbar-link">
          サンプルクラブ1
        </a>
        <div class="navbar-dropdown">
          <a href="/member/clubs/123" class="navbar-item is-active">
            サンプルクラブ1
          </a>
          <a href="/member/clubs/123" class="navbar-item">
            サンプルクラブ2
          </a>
          <a href="/member/clubs/123" class="navbar-item">
            サンプルクラブ3
          </a>
          <a href="/member/clubs/new" class="navbar-item">
            新規クラブ作成
          </a>
          <hr class="navbar-divider" />
          <a href="/member/clubs/123/members" class="navbar-item">
            メンバー一覧
          </a>
          <a href="/member/clubs/123/edit" class="navbar-item">
            クラブ編集
          </a>
        </div>
      </div>
    </div>
  </Header>
</template>

<script>
import Header from "@/components/member/Header";

export default {
  components: {
    Header
  }
};
</script>
