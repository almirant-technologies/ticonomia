# Ticonomía

Ticonomía es un conversor de monedas y visor de tipos de cambio centrado en Costa Rica. El proyecto incluye información obtenida en tiempo real desde distintas fuentes (bancos, cooperativas, etc.) mediante Supabase y una aplicación web desarrollada en **Next.js**.

## Estructura del Proyecto

* `/web`: Contiene la aplicación web creada con Next.js y Tailwind CSS.
* `/database`: Contiene el esquema y vistas de la base de datos (Supabase).
* `/scripts`: Contiene scripts para actualizaciones o recolección de datos (si aplica).

---

## 🚀 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión 18.17 o superior recomendada)
- **NPM** (viene incluido con Node.js)
- Una cuenta de **Supabase** activa para conexión a la base de datos.

---

## ⚙️ Variables de Entorno

Para que la aplicación funcione correctamente, requieres crear un archivo `.env.local` dentro del directorio `/web`.

Puedes basarte en un archivo de ejemplo u obtener las credenciales desde `Project Settings > API` en Supabase. El archivo `/web/.env.local` debe lucir así:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<tu-id-de-proyecto>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<tu-llave-publica>
```

---

## 🛠️ Instalación de Dependencias

Para instalar las dependencias necesarias de la aplicación web, abre una terminal, navega al directorio del frontend y ejecuta `npm install`:

```bash
cd web
npm install
```

---

## ▶️ Entorno de Desarrollo (Local)

Para correr la aplicación web en modo desarrollo con recarga en caliente (Hot Module Replacement):

```bash
cd web
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000). 
Podrás ver cualquier cambio reflejado directamente en tu navegador.

---

## 📦 Construcción para Producción

Cuando estés listo para desplegar o quieras probar cómo se ejecuta de manera optimizada:

1. **Construir el proyecto:** Ejecuta el comando de compilación:
   
   ```bash
   cd web
   npm run build
   ```
   Este comando optimizará el código, creará páginas estáticas donde sea posible y minificará tu aplicación en Next.js.

2. **Iniciar la versión de producción localmente:** 
   
   ```bash
   npm run start
   ```
   Esto levantará un servidor local rápido utilizando la compilación generada en el paso anterior.

---

## 🗄️ Base de Datos

En el directorio `/database`, encontrarás:
- `schema.sql`: Definiciones de las tablas.
- `views.sql`: Creación de vistas como `v_latest_exchange_board`, la principal fuente de datos conectada al index de la UI web.

Debes ejecutar estos archivos en tu instancia en Supabase (desde el editor SQL) para inicializar la base de datos de manera correcta.

## 📝 Consideraciones Adicionales

- **Autenticación Desactivada:** Esta rama está configurada de manera pública, por lo cual los middlewares de validación de usuarios han sido removidos.
- **Rutas de Next.js (`App Router`):** Trabajamos con la carpeta `app/` la cual maneja subrutas en carpetas (por ejemplo: `app/blog` o `app/nosotros`).
