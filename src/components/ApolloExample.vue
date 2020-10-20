<template>
  <div class="apollo-example">
    <!-- Cute tiny form -->
    <div class="form">
      <label for="field-name" class="label">Name</label>
      <input
        v-model="id"
        placeholder="Type a name"
        class="input"
        id="field-name"
      >
    </div>

    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="gql => gql`
        query  ($id: ID!) {
          getUsuario(id: $id){
           ...usuario
          }
        }
        ${$options.fragments.usuario}
      `"
      :variables="{ id }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured: {{error}}</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.getUsuario.nombre_usuario }}</div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

    <!-- Tchat example -->
    <ApolloQuery
      :query="require('../graphql/Messages.gql')"
    >
      <ApolloSubscribeToMore
        :document="require('../graphql/MessageAdded.gql')"
        :update-query="onMessageAdded"
      />

      <div slot-scope="{ result: { data } }">
        <template v-if="data">
          <div
            v-for="message of data.messages"
            :key="message.id"
            class="message"
          >
            {{ message.text }}
          </div>
        </template>
      </div>
    </ApolloQuery>

    <ApolloMutation
      :mutation="gql => gql`
    mutation crearUsuario($usuario: RegisterInput){
      crearUsuario(usuario:$usuario){
        ...usuario
      }
    }
    ${$options.fragments.usuario}
  `"
  
      :variables="{
        usuario: {
          nombre_usuario: newUsername,
          contrasena: newContrasena,
          nombres: newNombre,
          email: newEmail,
          rol: parseInt(newRol)
        },
      }"
    >
      <template slot-scope="{ mutate, loading, error} ">
        <form v-on:submit.prevent="formValid ">
          <input
            id="field-username"
            v-model="newUsername"
            placeholder="Type a username"
            class="input"
          >
          <input
            id="field-contrasena"
            v-model="newContrasena"
            placeholder="Type a contraseña"
            class="input"
          >
          <input
            id="field-nombres"
            v-model="newNombre"
            placeholder="Type a nombres"
            class="input"
          >
          <input
            id="field-email"
            v-model="newEmail"
            placeholder="Type a email"
            class="input"
          >
          <input
            id="field-rol"
            v-model="newRol"
            class="input"
            type="number"
          >
        </form>
        <button :disabled="loading" @click="mutate()">Click me</button>
        <p>{{newUsername}}</p>
        <p>{{newNombre}}</p>
        <p>{{newContrasena}}</p>
        <p>{{newEmail}}</p>
        <p>{{newRol}}</p>
        <p v-if="error">An error occurred: {{ error }}</p>

      </template>
    </ApolloMutation>

    <div class="images">
      <div
        v-for="file of files"
        :key="file.id"
        class="image-item"
      >
        <img :src="`${$filesRoot}/${file.path}`" class="image"/>
      </div>
    </div>

    <div class="image-input">
      <label for="field-image">Image</label>
      <input
        id="field-image"
        type="file"
        accept="image/*"
        required
        @change="onUploadImage"
      >
    </div>
  </div>
</template>

<script>
import FILES from '../graphql/Files.gql'
import UPLOAD_FILE from '../graphql/UploadFile.gql'
import gql from 'graphql-tag'
export default {
  fragments: {
    usuario: gql`
      fragment usuario on Usuario {
        id
        nombre_usuario
        contrasena
        nombres
        email
        rol{
          id
          nombre
        }
      }
    `
    },
  data () {
    return {
      id: 0,
      newMessage: '',
      newContrasena: '',
      newNombre: '',
      newEmail: '',
      newUsername: '',
      newRol: 1,
      resultId: 0
    }
  },
  apollo: {
    files: FILES,
  },
  computed: {
    formValid () {
      return this.newMessage
    },
  },
  methods: {
    onMessageAdded (previousResult, { subscriptionData }) {
      return {
        messages: [
          ...previousResult.messages,
          subscriptionData.data.messageAdded,
        ],
      }
    },
    async onUploadImage ({ target }) {
      if (!target.validity.valid) return
      await this.$apollo.mutate({
        mutation: UPLOAD_FILE,
        variables: {
          file: target.files[0],
        },
        update: (store, { data: { singleUpload } }) => {
          const data = store.readQuery({ query: FILES })
          data.files.push(singleUpload)
          store.writeQuery({ query: FILES, data })
        },
      })
    }
  },
}
</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}
label {
  display: block;
  margin-bottom: 6px;
}
.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}
.error {
  color: red;
}
.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
  grid-gap: 10px;
}
.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 8px;
}
.image {
  max-width: 100%;
  max-height: 100%;
}
.image-input {
  margin: 20px;
}
</style>