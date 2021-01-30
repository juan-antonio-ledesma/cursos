# Curso de Prework: Buenas Prácticas y Entorno de Desarrollo

## Índice

- [Manejo, archivos y directorios](https://github.com/juan-antonio-ledesma/cursos/blob/master/curso-de-prework--buenas-practicas-y-entorno-desarrollo/README.md#manejo-archivos-y-directorios)
- [Crear, editar, mover y eliminar archivos](https://github.com/juan-antonio-ledesma/cursos/blob/master/curso-de-prework--buenas-practicas-y-entorno-desarrollo/README.md#crear-editar-mover-y-eliminar-archivos)
- [Herramientas básicas](https://github.com/juan-antonio-ledesma/cursos/blob/master/curso-de-prework--buenas-practicas-y-entorno-desarrollo/README.md#herramientas-b%C3%A1sicas)
- [Crea llaves SSH](https://github.com/juan-antonio-ledesma/cursos/blob/master/curso-de-prework--buenas-practicas-y-entorno-desarrollo/README.md#crea-llaves-ssh)
- [Comandos git](https://github.com/juan-antonio-ledesma/cursos/blob/master/curso-de-prework--buenas-practicas-y-entorno-desarrollo/README.md#comandos-git)

## Manejo, archivos y directorios

- `ls` lista los archivos en la posición actual.
- `ls -a` lista archivos ocultos.
- `ls -l` lista el contenido con permisos; propietario; peso y fecha.
- `ls -t` organiza por fecha de modificación.
- `ls -lat` la combinación de todas las banderas.

---

- `.` carpeta actual.
- `..` padre de la carpeta.
- `clear` limpia la pantalla.
- `ctrl + l` lo mismo.

---

- `pwd` ruta absoluta: desde el inicio del sistema de archivos. Ruta relativa: en base a nuestra ubicación.

---

- `cd folder-name` entrar en la carpeta.
- `cd ..` regresamos a la carpeta padre.
- `cd` nos lleva a home.
- `cd ~/` lo mismo.

---

- `mkdir folder-name` crear carpeta.

---

- `history` historial de los comandos usados.
  A la izquierda tiene un número de ID. Para usar un comando del historial, Ejemplo: `!248`

## Crear, editar, mover y eliminar archivos

- `touch example.txt` crea un archivo.
- `nano example.txt` editor archivo. Con ctrl + x salimos y guardamos.
- `mv example.txt <ubicación final>/example.txt` nos mueve el archivo a una ubicación.
- `rm example.txt` elimina archivo.
- `rm -rf <carpeta>` elimina una carpeta.

## Herramientas básicas

- `cat example.txt` vemos el contenido del archivo.
- `more example.txt` vemos una parte del archivo. Bajamos con flecha abajo y arriba, bajamos completamente con espacio. Para salir pulsamos q.
- `less example.txt` lo mismo pero para Windows.
- `tail example.txt` vemos las últimas 10 líneas del archivo.
- `cat example.txt > copy-name-example.txt` copiamos un archivo.
- `open example.txt` abrimos un archivo con el programa por defecto para él (solamente funciona para Mac y Linux).
- `explorer example.txt` lo mismo pero para Windows.

## Crea llaves SSH

Las llaves SSH nos van a ayudar para autentificarnos con servidores.
SSH utiliza criptografía asimétrica, o sea, tenemos dos llaves:

- Pública: la llave pública la podemos compartir por internet.
- Privada: debes tenerla en un sitio seguro y no debe ser compartida.

Tener una llave SSH nos permitirá una conexión fácil y segura con servidores,
en el caso de la escuela de JavaScript nos va a servir para conectarnos con GitHub.

Para crear una llave SSH utilizamos el siguiente comando (Ejemplo):

`ssh-keygen -t rsa -b4096 -C "Esto es una llave SSH" `

- `-t` para indicarle el algoritmo que va a usar
- `-b` para indicar el numero de bits
- `-C` para agregar comentario

Luego solicita la ruta, puedes dejar la que pone por defecto presionando Enter o cambiarla.
Después solicita un passphrase que es una contraseña, la confirmas.

## Comandos git

- `git init` te crea el proyecto de git en tu directorio.
- `git add index.js` gregamos un archivo al proyecto
- `git status` muestra el estado general, commits y archivos en el staging. Todo cambio tiene varios estados dentro de Git:
  - Sin seguimiento
  - Sin cambios
  - Con cambios
  - En stagging

---

- `git log` te muestra el historico de cambios en el proyecto, los ids de los commits también.
- `git checkout index.js` descartamos los cambios de un archivo.
- `git checkout .` descartamos todos los cambios
- `git commit -m “Comentario”` agrega un commit con mensaje

---

- `git reset --soft 49759bffd3c4660e96d492932fa17d6ea98bf43d` regresamos a ese commit sin eliminar el último commit.
- `git reset --hard 49759bffd3c4660e96d492932fa17d6ea98bf43d` regresamos a ese commit e ignoramos los últimos commits.
