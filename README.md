# API-Logs Frontend

**Interfaz web para la visualización y consulta de registros de una API.**

API-Logs Frontend es una aplicación web desarrollada con React y TypeScript, diseñada para consumir los servicios del proyecto [API-Logs Backend](https://github.com/EspiSebas/Api-Logs).

El objetivo es proporcionar una interfaz para interactuar con el backend y facilitar el acceso a la información relacionada con los registros generados por las solicitudes HTTP.

## Objetivos del proyecto

- Construir una interfaz web para consumir una API REST.
- Integrar el frontend con el backend mediante solicitudes HTTP.
- Organizar la aplicación utilizando componentes reutilizables.
- Facilitar la visualización y consulta de información.
- Aplicar buenas prácticas de desarrollo frontend con React y TypeScript.

## Tecnologías utilizadas

| Tecnología | Propósito |
|---|---|
| React 19 | Construcción de interfaces de usuario |
| TypeScript | Desarrollo con tipado estático |
| Vite | Servidor de desarrollo y herramientas de construcción |
| Axios | Realización de solicitudes HTTP al backend |
| Bootstrap 5 | Diseño de interfaces responsivas |
| React Bootstrap | Componentes de interfaz basados en Bootstrap |
| React Router | Navegación entre vistas |
| ESLint | Análisis estático y calidad del código |
| npm | Gestión de dependencias |

## Arquitectura general

La aplicación forma parte de una solución dividida en dos proyectos: frontend y backend.

```text
┌──────────────────────────────┐
│          Usuario             │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       API-Logs Frontend      │
│                              │
│  React + TypeScript          │
│  Componentes y vistas        │
│  Axios                       │
└──────────────┬───────────────┘
               │
               │ Solicitudes HTTP
               ▼
┌──────────────────────────────┐
│       API-Logs Backend       │
│                              │
│  Java + Spring Boot          │
│  Lógica de negocio           │
│  Persistencia de información │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          MySQL               │
└──────────────────────────────┘
```

*El diagrama representa la arquitectura conceptual de la solución; los detalles de comunicación y persistencia dependen de la configuración del backend.*

## Requisitos previos

Antes de ejecutar el proyecto, necesitas:

- [Node.js](https://nodejs.org/)
- npm, incluido con Node.js.
- Git.
- Una instancia del backend API-Logs en ejecución para probar la integración completa.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/EspiSebas/Api-Logs-Frontend.git
cd Api-Logs-Frontend
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Configurar la conexión con el backend

Verifica la URL base que utiliza Axios para comunicarse con el backend y ajústala a la dirección donde se ejecuta la API.

Por ejemplo, si el backend está disponible localmente:

```text
http://localhost:8080
```

Esta dirección es ilustrativa; debes utilizar el puerto y las rutas definidos en la configuración real del backend.

Si frontend y backend utilizan orígenes diferentes, configura CORS en el backend para permitir las solicitudes desde el frontend.

### 4. Ejecutar la aplicación

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde puedes abrir la aplicación. Normalmente es:

```text
http://localhost:5173
```

## Scripts disponibles

El proyecto incluye los siguientes comandos:

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Comprueba los tipos de TypeScript y genera la versión de producción |
| `npm run lint` | Ejecuta ESLint para analizar el código |
| `npm run preview` | Permite previsualizar la compilación de producción |

## Construcción para producción

Para generar los archivos optimizados de producción, ejecuta:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`, listos para desplegarse en un servicio de hosting compatible con aplicaciones frontend estáticas.

## Proyecto relacionado

**Backend:** [API-Logs — Spring Boot](https://github.com/EspiSebas/Api-Logs)

Consulta el repositorio del backend para conocer la implementación de los servicios y la lógica que consume esta interfaz.

## Autor

**Sebastian Espinosa**

Tecnólogo en Análisis y Desarrollo de Software | Desarrollador Backend y Full Stack

- GitHub: [@EspiSebas](https://github.com/EspiSebas)
- LinkedIn: [sebastian-espinosa-dev](https://www.linkedin.com/in/sebastian-espinosa-dev/)

---

*Proyecto personal enfocado en el desarrollo de interfaces web, integración con APIs REST y construcción de aplicaciones utilizando tecnologías modernas de JavaScript y TypeScript.*
