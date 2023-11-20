<template>
  <footer class="footer bg-background-secondary px-8">
    <div class="d-flex align-center">
      <v-avatar
        class="mr-3"
        :size="['xs'].includes($vuetify.display.name) ? 48 : 64"
      >
        <v-img
          src="/images/avatar.jpg"
          alt="avatar"
        />
      </v-avatar>

      <div class="d-flex flex-column justify-center">
        <p class="text-white">Author</p>
        <p class="text-white">Artem Ovsiienko</p>
        <a
          href="https://github.com/Artem-GitHub"
          class="footer__link"
          target="_blank"
        >
          https://github.com/Artem-GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  display: flex
  align-items: center
  justify-content: center
  height: 120px

  @include media-breakpoint-up(xs)
    justify-content: flex-start

  &__link
    font-size: 12px
    color: white

    @include media-breakpoint-up(xs)
      font-size: 16px
</style>
