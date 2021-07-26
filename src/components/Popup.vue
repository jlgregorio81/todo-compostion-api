<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{{ msg }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" @click="$emit('closePopup', true)" class="btn btn-danger" data-bs-dismiss="modal">Sim</button>
        <button type="button" @click="$emit('closePopup', false)" class="btn btn-primary" data-bs-dismiss="modal">Não</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Popup",
  props: ["title", "msg"],
  emits: ["closePopup"],
};
</script>

<style scoped>

</style>