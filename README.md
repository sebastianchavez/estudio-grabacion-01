# Estudio de Grabación 01 — SoundLab Studio

Template de sitio web para un estudio de grabación profesional, orientado a la reserva de sesiones,展示 de servicios y gestión de usuarios.

## Stack

- HTML5
- TailwindCSS (CDN)
- JavaScript vanilla (`main.js`)
- Fuentes: Bebas Neue + Inter (Google Fonts)

## Estructura

```
estudio-grabacion-01/
├── index.html              # Inicio / landing
├── servicios.html          # Catálogo de servicios
├── horarios.html           # Disponibilidad de horarios
├── precios.html            # Planes y tarifas
├── galeria.html             # Galería del estudio
├── reserva.html            # Formulario de reserva
├── detalle-reserva.html    # Detalle de una reserva
├── pago.html               # Proceso de pago
├── pago-confirmado.html    # Confirmación de pago
├── confirmacion.html       # Confirmación final de reserva
├── contacto.html           # Formulario de contacto
├── perfil.html             # Perfil del usuario
├── inicio-sesion.html      # Login
├── registro.html           # Registro de usuario
├── recuperar-password.html # Recuperación de contraseña
├── terminos.html            # Términos y condiciones
├── css/                    # Estilos personalizados
└── main.js                 # Lógica de interacción
```

## Páginas principales

- **Inicio**: presentación del estudio y servicios destacados.
- **Reservas**: flujo completo (reserva → detalle → pago → confirmación).
- **Cuenta**: login, registro, recuperación de contraseña y perfil.
- **Legales**: términos y política de privacidad.
- **Información**: servicios, horarios, precios, galería y contacto.

## Uso

Abrir `index.html` directamente en el navegador, o servir el directorio con cualquier servidor estático:

```bash
# Ejemplo con Python
python -m http.server 8080
```

> No requiere build ni dependencias locales.