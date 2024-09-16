<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2>{{ modalTitle }}</h2>
      <form @submit.prevent="handleSubmit">
        <label v-if="modalType === 'signIn'" for="email">Email</label>
        <input v-if="modalType === 'signIn'" type="email" id="email" v-model="email" required />

        <label v-if="modalType === 'signIn'" for="password">Password</label>
        <input v-if="modalType === 'signIn'" type="password" id="password" v-model="password" required />

        <label v-if="modalType === 'signUp'" for="login">Login</label>
        <input v-if="modalType === 'signUp'" type="text" id="login" v-model="login" required />

        <label v-if="modalType === 'signUp'" for="email">Email</label>
        <input v-if="modalType === 'signUp'" type="email" id="email" v-model="email" required />

        <label v-if="modalType === 'signUp'" for="password">Password</label>
        <input v-if="modalType === 'signUp'" type="password" id="password" v-model="password" required />

        <button type="submit">{{ modalButtonText }}</button>
        <button type="button" @click="closeModal">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const isVisible = ref(false);
  const modalType = ref('');
  const modalTitle = ref('');
  const modalButtonText = ref('');

  const email = ref('');
  const password = ref('');
  const login = ref('');

  function openModal(type: 'signIn' | 'signUp', title: string, buttonText: string) {
    modalType.value = type;
    modalTitle.value = title;
    modalButtonText.value = buttonText;
    isVisible.value = true;
  }

  function closeModal() {
    isVisible.value = false;
  }

  function handleSubmit() {
    if (modalType.value === 'signIn') {
      console.log('Sign In with', { email: email.value, password: password.value });
    } else if (modalType.value === 'signUp') {
      console.log('Sign Up with', { login: login.value, email: email.value, password: password.value });
    }
    closeModal();
  }

  defineExpose({
    openModal,
  });
</script>

<style>
  .modal-overlay {
    font-family: "Dancing Script", sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
  }

  .modal h2 {
    text-align: center;
    margin-top: 0;
  }

  .modal form {
    display: flex;
    flex-direction: column;
  }

  .modal label {
    margin-top: 10px;
  }

  .modal input {
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .modal button {
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #000;
    color: white;
    cursor: pointer;
    font-family: "Dancing Script", sans-serif;
  }

  .modal button:hover {
    background-color: #555;
  }
</style>
