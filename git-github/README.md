## Configuración de Git

- `git config --global user.email juanantonioledesma@gmail.com` configuración del email.
- `git config --global user.name "Juan Antonio Ledesma"` configuración del nombre de usuario.
- `git config --global color.ui true` activar color.
- `git config --global core.editor "code --wait"` configuramos nuestro editor de texto para que abra la terminal cuando ejecutemos algún comando de git.

## git-init (Creando repositorios)

- `git-int nombre-repositorio` creamos un repositorio con el nombre que le demos dentro de una carpeta.
- `git-init` creamos un repositorio dentro de la carpeta donde nos encontremos.

## git add | rm | status (Agregando, quitando y viendo el estatus de archivos)

- `git status` vemos el estado actual del repositorio.
- `git add example.html` pasamos un archivo a staging.
- `git rm --cached example.html` sacamos un archivo de staging a unstaging.
- `git add -A` pasamos todos los archivos a staging.
- `git rm -f example.html` sacamos un archivo de staging a unstaging y lo eliminamos.

## git commit (Confirmando cambios)

- `git commit -m "inicializar nuestro landing"` pasamos nuestros cambios de staging a committed.
- `git commit --amend` añadimos contenido nuevo o modificado pero sin necesidad de hacer commit, ya que el anterior commit es correcto y estos cambios se añadirían al último commit que hicimos.

## git tag (Etiquetando confirmaciones)

- `git tag -a 0.5 -m 'versión estable del proyecto'` añado una etiqueta a mi rama, con un mensaje (versión anotada). Es decir añadimos una etiqueta a partir del último commit que hemos hecho.
- `git tab -l` mostramos un listado con todas nuestras etiquetas.
- `git tag 0.3 7a8974a552ed566f1b48c30a674a4eddd325864f` añadimos una etiqueta a un commit en concreto. Este sería un ejemplo de light tag, ya que no tiene mensaje.
- `git tag -d 0.3` eliminamos una etiqueta.
- `git tag -f -a 0.1 -m 'iniciando el proyecto' 7a8974a552ed566f1b48c30a674a4eddd325864` renombramos una etiqueta.

## git log (Revisando la historia de nuestro proyecto)

- `git log` observamos todos los commits que se han hecho.
  Cada log nos muestra el sha1 (código de 40 carácteres que nos sirve como id de cada commit). También muestra el autor, la fecha y el mensaje que se dejó.

- `git log --oneline` vista abreviada de nuestros commits.
- `git log --oneline --graph` vista abreviada del repositorio y también nos muestra las diferentes ramas que tiene este.
- `git log -2` nos muestra los dos últimos commits, podemos modificarlo para ver los que queramos.

## git diff (Revisando los cambios entre versiones)

- `git diff` nos muestra los cambios que hemos realizado respecto al anterior commit.
- `git diff 05b6a67` nos muestra los cambios que hemos realizado respecto al sha1 que le indiquemos.
- `git diff c342a9c 05b6a67` nos muestra los cambios que hemos realizado entre dos commits.

## git reset --soft

`git reset --soft 05b6a67` volvemos al commit que le indiquemos, eliminando los commits posteriores. Con git reset --soft tenemos los archivos en staging preparados para hacer el commit.

## git reset --mixed

`git reset --mixed 05b6a67` volvemos al commit que le indiquemos, eliminando los commits posteriores. Con git reset --mixed tenemos los archivos que hemos modificado pero no se encuentran en staging.

## git reset --hard

`git reset --hard 05b6a67` volvemos al commit que le indiquemos, eliminando los commits posteriores y los archivos que modificamos en ese commit.

## git branch (Múltiples variantes del repositorio)

- `git branch responsive` creo una rama.
- `git branch -l` listamos las ramas que tenemos.
- `git branch -d responsive` borramos una rama.
- `git branch -D responsive` borramos una rama, forzamos el borrado, si hay cambios pendientes, los omite y borra la rama.
- `git branch -m nombre-rama-antigua nombre-rama-nueva` renombramos rama.

## git checkout (Moviéndonos entre ramas y versiones)

- `git checkout rama` nos movemos a una rama en concreto.
- `git checkout a4ca6e7` nos movemos a un commit en concreto.
- `git checkout -b nueva-rama` creamos una rama y nos movemos hacia ella.

## git merge (Mezclando ramas y resolviendo conflictos)

`git merge rama-nueva` Para mergear tenemos que estar en la rama que queremos que vaya a recibir los cambios. En algunos casos tenemos que solucionar conflictos entre archivos que se han modificado en ambas ramas para poder mergear.

## git stash (Guardando cambios temporalmente)

- `git stash` nos sirve para guardar cambios temporalmente.
  Se suele utilizar cuando hemos modificado un archivo, y necesitamos cambiar de rama por alguna razón. En vez de descartar los cambios que tenemos en esa rama, para podernos movernos a otra rama, realizamos un stash. Los archivos modificado tienen que estar en staging.
- `git stash list` listamos los stash.
- `git stash drop stash@{0}` eliminamos un stash.
- `git stash apply` recuperamos los cambios del último stash, stash@{0}.
- `git stash apply stash@{0}` recuperamos los cambios de un stash en concreto.

## Cherry pick eligiendo commits selectivamente

`git cherry-pick e440ede` Cherry pick se suele utilizar cuando hemos solucionado o desarrollado algo, dentro de una rama que no era la esperada. Para poder mover el cambio donde queremos, simplemente nos vamos a la rama deseada, ejecutamos cherry-pick con el sha1 del commit en el que estamos interesados.

## git clone/fork (Clonado de repositorios)

- `git clone https://github.com/juan-antonio-ledesma/cursos.git` clonamos un repositorio remoto en nuestra máquina.
- En GitHub podemos crear una copia de un repositorio desarrollado por otra persona, mediante `Fork`.

## Añadiendo una llave ssh a GitHub

- Ejecutamos el siguiente comando para crear la clave ssh: `ssh-keygen -t rsa -b 4096 -C "miemail@miemail.com"`
- La copiamos con este comando: `pbcopy < ~/.ssh/id_rsa.pub`
- Después vamos a GitHub > Settings > SSH and GPG keys > new SSH key > Pegamos la clave generada y le damos a Add key.

## git pull/fetch (Trayendo cambios desde el repositorio remoto)

Existen dos formas para obtener los cambios realizados en remoto.

- mediante fetch:
  - `git fetch origin master`
  - `git merge origin/master --allow-unrelated-historie`
- mediante pull:
  - `git pull origin master`

## git push (Enviando cambios al repositorio remoto)

- `git push origin master` enviamos nuestros cambios al repositorio remoto.
- `git push origin master --tags` enviamos nuestros tags al repositorio remoto.
