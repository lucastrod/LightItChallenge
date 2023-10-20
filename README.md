 # Pruebas con Playwright

## Stack Utilizado

- **Framework de Pruebas:** [Playwright](https://playwright.dev/)

## Inicialización

Para ejecutar las pruebas en este proyecto, sigue los pasos a continuación:

-npm install
-npx playwright test
 
 
 
 # Pruebas de UI y API en Playwright

En este proyecto, he creado pruebas de usuario (UI) y pruebas de API utilizando Playwright para automatizar las pruebas en nuestra aplicación web. A continuación, describo los casos de prueba que he creado y las justificaciones detrás de ellos:

## Casos de Prueba de UI

### Caso de Prueba 1: Positive Scenario for login + logout

- **Justificación:** Para garantizar que los usuarios puedan iniciar sesión con éxito y cerrar sesión sin problemas. Este es un escenario común en la mayoría de las aplicaciones web.
- **Mejoras Posibles:** Podemos agregar más verificaciones, como la validación de que el nombre de usuario o la imagen de perfil se muestren correctamente después de iniciar sesión.

### Caso de Prueba 2: Negative Scenario for login

- **Justificación:** Para verificar cómo la aplicación maneja credenciales incorrectas. Es crucial que la aplicación proporcione un mensaje de error adecuado y trate las credenciales inválidas de manera apropiada.
- **Mejoras Posibles:** Podemos verificar el tipo de mensaje de error recibido para asegurarnos de que coincida con lo esperado.

### Caso de Prueba 3: Login + Chat Interaction

- **Justificación:** Para asegurarnos de que el chat funcione correctamente después de iniciar sesión. Esto es fundamental para una experiencia de usuario fluida.
- **Mejoras Posibles:** Podemos realizar más interacciones en el chat, como enviar mensajes adicionales o verificar la visibilidad de los mensajes enviados.

## Casos de Prueba de API

### Caso de Prueba 1: Positive Login + Logout

- **Justificación:** Para verificar que la API permita un inicio de sesión exitoso y un cierre de sesión exitoso. La autenticación y la autorización son aspectos críticos de nuestra aplicación.
- **Mejoras Posibles:** Podemos verificar si el token de acceso se genera correctamente y si se invalida correctamente después del cierre de sesión.

### Caso de Prueba 2: Forbidden Login

- **Justificación:** Para comprobar cómo la API responde cuando se intenta iniciar sesión con credenciales incorrectas. Debe devolver un código de estado 403 (Prohibido) en lugar de 200 (Éxito).
- **Mejoras Posibles:** Podemos verificar el mensaje de error en la respuesta para asegurarnos de que sea apropiado.

### Caso de Prueba 3: Invalid Service

- **Justificación:** Para verificar cómo la API responde cuando se realiza una solicitud a un servicio inexistente. Debe devolver un código de estado 404 (No encontrado) en lugar de 200 (Éxito).
- **Mejoras Posibles:** Podemos verificar si la respuesta contiene detalles sobre la falta de servicio y, si es aplicable, proporciona una respuesta amigable.

En resumen, estos casos de prueba abordan una variedad de escenarios críticos en nuestra aplicación, tanto en la interfaz de usuario como en la capa de API. Las mejoras sugeridas se centran en verificar más detalles y proporcionar información más detallada en las respuestas, lo que puede ser útil para depurar problemas en el futuro. Además, consideramos agregar casos de prueba para escenarios de borde o excepcionales según las necesidades de nuestro proyecto.

run all the cases from allure npx playwright test --reporter=line,experimental-allure-playwright
generate -> npx allure generate ./allure-results
open->  npx allure open ./allure-report   