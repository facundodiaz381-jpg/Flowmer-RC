# 🎮 FlowMer | Gaming Platform

Plataforma web de videojuegos digital inspirada en la experiencia de Steam, desarrollada como proyecto para **Rolling Code School**. Permite explorar un catálogo interactivo de títulos, reproducir trailers y bandas sonoras, gestionar listas de deseados, calificar y administrar el inventario con roles de usuario.

---

## 🚀 Características Principales

- 🏪 **Catálogo Interactivo:** Exploración de títulos con filtros por categoría y barra de búsqueda en tiempo real.
- 🎬 **Página de Detalle de Videojuegos:**
  - Reproductor de tráilers oficiales en alta definición.
  - Integración de **Bandas Sonoras oficiales (Soundtracks)** con enlaces y recomendaciones exclusivas.
  - Requisitos mínimos y recomendados del sistema.
  - Sistema de valoraciones de la comunidad (Upvotes / Downvotes).
  - Publicación y lectura de reseñas en tiempo real.
- 💜 **Lista de Deseados (Wishlist):**
  - Guardado de juegos favoritos persistido por usuario en `localStorage`.
  - Contador reactivo en tiempo real en la barra de navegación.
  - Cálculo automático del costo total estimado de la lista.
- 💳 **Simulación de Compra:** Pasarela de pago interactiva estilo checkout.
- 🛡️ **Roles y Autenticación:**
  - **Usuario / Gamer:** Navegación, gestión de favoritos, votaciones y reseñas.
  - **Administrador:** Panel de control (`/admin`) protegido con operaciones CRUD completas (Crear, Editar y Eliminar videojuegos).
- 📱 **Diseño Responsive:** Interfaz moderna con estética dark mode y glassmorphism adaptada a computadoras, tablets y celulares.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador & Dev Server:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Enrutamiento:** [React Router](https://reactrouter.com/)
- **Persistencia de Datos:** `localStorage` API
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/)
- **Despliegue:** [Vercel](https://vercel.com/)

---

## 👥 Equipo de Desarrollo

| Integrante | Rol | GitHub |
| :--- | :--- | :--- |
| **Lautaro Luna** | Frontend Developer | [@lautarolunaa00](https://github.com/lautarolunaa00) |
| **Lucas Alarcón** | Frontend Developer | [@lucasnicoalarcon](https://github.com/lucasnicoalarcon) |
| **Facundo Romano** | Frontend Developer | [@facundodiaz381-jpg](https://github.com/facundodiaz381-jpg) |
| **Jose Maria Cazorla** | Frontend Developer | [@josemacazorla](https://github.com/) |
| **Santiago Díaz** | Frontend Developer | [@santiagodiaz](https://github.com/) |

---

## 💻 Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/facundodiaz381-jpg/Flowmer-RC.git
   cd Flowmer-RC
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```

4. **Compilar para producción:**
   ```bash
   pnpm build
   ```

---

## 🔐 Usuarios de Prueba (Pre-cargados)

| Rol | Correo Electrónico | Contraseña |
| :--- | :--- | :--- |
| **Administrador** | `admin@flowmer.com` | `admin123` |
| **Usuario / Gamer** | `player@flowmer.com` | `player123` |
