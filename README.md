Chuncho slackbot
=================

Basado en el framework [Bolt](https://slack.dev/bolt) que permite hacer aplicaciones para Slack

[![Total alerts](https://img.shields.io/lgtm/alerts/g/chuncho-bot/core.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/chuncho-bot/core/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/chuncho-bot/core.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/chuncho-bot/core/context:javascript)

Puedes agregar tus propios comandos en `/scripts` o puedes instalar comandos pre-hechos para Chuncho desde los repositorios npm. Agregará automaticamente cada uno de los paquetes instalados sin mayor configuración excepto que lo requiera como asignando variables de entorno en el archivo `.env`

Actualmente existen 3 scripts disponibles que puedes instalar via `npm`

```
npm install @chuncho/cuando-pagan

npm install @chuncho/dame-una-tarjeta

npm install @chuncho/imagen
```

Para contribuir solo debes hacer un PR de tu script, no necesitas tener slack instalado, basta con hacer pruebas de jest dentro de cada script. Estos se realizan usualmente con los paquetes que pertenecen a `@slack-wrench` que facilitan este tipo de pruebas, puedes partir por utilizar el Jest Bolt Receiver (`@slack-wrench/jest-bolt-receiver`) y los fixtures (`@slack-wrench/fixtures`). En el primero puedes encontrar un ejemplo de como crear un script de prueba