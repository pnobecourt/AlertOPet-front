<template>
    <!-- Footer -->
    <footer class="footer">
      <div class="social">
        <a href="" target="_blank" title="Facebook"
          ><img src="../assets/images/Facebook.svg" alt="Facebook"
        /></a>
        <a href="" target="_blank" title="Instagram"
          ><img src="../assets/images/Instagram.svg" alt="Instagram"
        /></a>
        <a href="" target="_blank" title="Twitter"
          ><img src="../assets/images/Twitter.svg" alt="Twitter"
        /></a>
        <a href="" target="_blank" title="YouTube"
          ><img src="../assets/images/YouTube.svg" alt="YouTube"
        /></a>
      </div>

      <div class="contact">
        <a href="mailto:contact@alertOpet.com" title="Contact">Contact</a> -
        <!-- <a href="/mentions-legales" title="Contact">Mentions légales</a> -->
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
      </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
