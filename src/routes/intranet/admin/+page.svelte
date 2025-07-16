<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import Icon from '$lib/components/Icon.svelte';

  let user = null;
  let users = [];
  let contacts = [];
  let showUsers = false;
  let showContacts = false;
  let showSettings = false;
  let loading = false;
  let error = null;

  // Formulario de usuario
  let userForm = {
    name: '',
    email: '',
    password: '',
    role: 'USER'
  };
  let editingUser = null;

  onMount(async () => {
    if (browser) {
      await checkAuth();
    }
  });

  async function checkAuth() {
    const token = localStorage.getItem('formeta_token');
    if (!token) {
      goto('/intranet');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        user = result.data;
        if (user.role !== 'ADMIN') {
          goto('/intranet/dashboard');
        }
      } else {
        localStorage.removeItem('formeta_token');
        localStorage.removeItem('formeta_user');
        goto('/intranet');
      }
    } catch (err) {
      console.error('Error:', err);
      localStorage.removeItem('formeta_token');
      localStorage.removeItem('formeta_user');
      goto('/intranet');
    }
  }

  async function fetchUsers() {
    loading = true;
    error = null;
    try {
      const token = localStorage.getItem('formeta_token');
      const response = await fetch('http://localhost:3000/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        users = result.data;
        showUsers = true;
      } else {
        error = 'Error al cargar usuarios';
      }
    } catch (err) {
      error = 'Error de conexión';
    } finally {
      loading = false;
    }
  }

  async function fetchContacts() {
    loading = true;
    error = null;
    try {
      const token = localStorage.getItem('formeta_token');
      const response = await fetch('http://localhost:3000/api/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        contacts = result.data;
        showContacts = true;
      } else {
        error = 'Error al cargar contactos';
      }
    } catch (err) {
      error = 'Error de conexión';
    } finally {
      loading = false;
    }
  }

  async function saveUser() {
    if (!userForm.name || !userForm.email || (!editingUser && !userForm.password)) {
      error = 'Por favor complete todos los campos';
      return;
    }

    loading = true;
    error = null;

    try {
      const token = localStorage.getItem('formeta_token');
      const url = editingUser ? `http://localhost:3000/api/users/${editingUser.id}` : 'http://localhost:3000/api/users';
      const method = editingUser ? 'PUT' : 'POST';
      
      const body = { ...userForm };
      if (editingUser && !userForm.password) {
        delete body.password;
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        resetForm();
        await fetchUsers();
      } else {
        const errorData = await response.json();
        error = errorData.message || 'Error al guardar usuario';
      }
    } catch (err) {
      error = 'Error de conexión';
    } finally {
      loading = false;
    }
  }

  async function deleteUser(userId) {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      return;
    }

    loading = true;
    error = null;

    try {
      const token = localStorage.getItem('formeta_token');
      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchUsers();
      } else {
        error = 'Error al eliminar usuario';
      }
    } catch (err) {
      error = 'Error de conexión';
    } finally {
      loading = false;
    }
  }

  function editUser(userToEdit) {
    editingUser = userToEdit;
    userForm = {
      name: userToEdit.name,
      email: userToEdit.email,
      password: '',
      role: userToEdit.role
    };
  }

  function resetForm() {
    editingUser = null;
    userForm = {
      name: '',
      email: '',
      password: '',
      role: 'USER'
    };
  }

  async function exportContacts() {
    loading = true;
    error = null;

    try {
      const token = localStorage.getItem('formeta_token');
      const response = await fetch('http://localhost:3000/api/contacts/export', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contactos_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        error = 'Error al exportar contactos';
      }
    } catch (err) {
      error = 'Error de conexión';
    } finally {
      loading = false;
    }
  }

  function logout() {
    localStorage.removeItem('formeta_token');
    localStorage.removeItem('formeta_user');
    goto('/intranet');
  }

  function goToDashboard() {
    goto('/intranet/dashboard');
  }
</script>

<svelte:head>
  <title>Panel de Administración - Formeta</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-bold text-gray-900">Panel de Administración</h1>
          <span class="text-sm text-gray-500">Bienvenido, {user?.name}</span>
        </div>
        <div class="flex items-center space-x-4">
          <button
            on:click={goToDashboard}
            class="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Icon name="dashboard" class="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            on:click={logout}
            class="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
          >
            <Icon name="logout" class="w-4 h-4" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-6xl mx-auto px-4 py-8">
    {#if loading}
      <div class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    {/if}

    {#if error}
      <div class="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
        <div class="flex">
          <Icon name="alert-circle" class="w-5 h-5 text-red-400 mr-2" />
          <div class="text-sm text-red-800">{error}</div>
        </div>
      </div>
    {/if}

    <!-- Admin Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- Gestión de Usuarios -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <Icon name="users" class="w-6 h-6 text-blue-600 mr-3" />
          <h2 class="text-xl font-semibold text-gray-900">Usuarios</h2>
        </div>
        <p class="text-gray-600 mb-4">Gestionar usuarios del sistema</p>
        <button
          on:click={fetchUsers}
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Gestionar Usuarios
        </button>
      </div>

      <!-- Gestión de Contactos -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <Icon name="mail" class="w-6 h-6 text-green-600 mr-3" />
          <h2 class="text-xl font-semibold text-gray-900">Contactos</h2>
        </div>
        <p class="text-gray-600 mb-4">Ver mensajes de contacto</p>
        <button
          on:click={fetchContacts}
          class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Ver Contactos
        </button>
      </div>

      <!-- Configuración -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-center mb-4">
          <Icon name="settings" class="w-6 h-6 text-gray-600 mr-3" />
          <h2 class="text-xl font-semibold text-gray-900">Configuración</h2>
        </div>
        <p class="text-gray-600 mb-4">Ajustes del sistema</p>
        <button
          on:click={() => showSettings = !showSettings}
          class="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
        >
          Configuración
        </button>
      </div>
    </div>

    <!-- Gestión de Usuarios -->
    {#if showUsers}
      <div class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Gestión de Usuarios</h2>
          <button
            on:click={() => showUsers = false}
            class="text-gray-500 hover:text-gray-700"
          >
            <Icon name="x" class="w-5 h-5" />
          </button>
        </div>

        <!-- Formulario de Usuario -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            {editingUser ? 'Editar Usuario' : 'Crear Usuario'}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              bind:value={userForm.name}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              bind:value={userForm.email}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder={editingUser ? 'Nueva contraseña (opcional)' : 'Contraseña'}
              bind:value={userForm.password}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              bind:value={userForm.role}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="USER">Usuario</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
          <div class="mt-4 flex space-x-4">
            <button
              on:click={saveUser}
              disabled={loading}
              class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {editingUser ? 'Actualizar' : 'Crear'}
            </button>
            <button
              on:click={resetForm}
              class="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>

        <!-- Lista de Usuarios -->
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each users as user}
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.name}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.email}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {user.role === 'ADMIN' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
                      {user.role}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      on:click={() => editUser(user)}
                      class="text-blue-600 hover:text-blue-900"
                    >
                      <Icon name="edit" class="w-4 h-4" />
                    </button>
                    <button
                      on:click={() => deleteUser(user.id)}
                      class="text-red-600 hover:text-red-900"
                    >
                      <Icon name="trash" class="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/if}

    <!-- Gestión de Contactos -->
    {#if showContacts}
      <div class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Mensajes de Contacto</h2>
          <div class="flex space-x-2">
            <button
              on:click={exportContacts}
              class="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
            >
              <Icon name="download" class="w-4 h-4" />
              <span>Exportar CSV</span>
            </button>
            <button
              on:click={() => showContacts = false}
              class="text-gray-500 hover:text-gray-700"
            >
              <Icon name="x" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mensaje
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each contacts as contact}
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contact.name}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contact.email}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contact.company || '-'}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {contact.message}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/if}

    <!-- Configuración -->
    {#if showSettings}
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Configuración del Sistema</h2>
          <button
            on:click={() => showSettings = false}
            class="text-gray-500 hover:text-gray-700"
          >
            <Icon name="x" class="w-5 h-5" />
          </button>
        </div>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Estado del Sistema</h3>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="text-sm text-gray-600">Sistema operativo</span>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Estadísticas</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{users.length}</div>
                <div class="text-sm text-gray-600">Usuarios registrados</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-2xl font-bold text-green-600">{contacts.length}</div>
                <div class="text-sm text-gray-600">Mensajes recibidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </main>
</div>
