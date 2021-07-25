<template>
  <transition 
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div id="popup">
      <div id="content">
        <div>
          <h1>{{ title }}</h1>
        </div>
        <div>
          <h2>{{ msg }}</h2>
        </div>
        <div>
          <button @click="$emit('closePopup', true)">Sim</button>
          <button @click="$emit('closePopup', false)">Não</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Popup",
  props: ["title", "msg"],
  emits: ["closePopup"],
};
</script>

<style scoped>
#popup {
  background-color: rgba(0, 55, 55, 0.9);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  padding: 10px;
  border: solid thin darkblue;
}

#content {
  width: 40%;
  margin: 0 auto;
  background-color: gray;
  padding: 15px;
  border: black medium solid;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(33, 34, 34, 0.9);
}

#content > * {
  color: white;
}
</style>