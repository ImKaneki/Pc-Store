# Plantilla devcontainer con python y reflex
esta es una plantilla de reflex basica con devcontainer la ventaja de usar este contendor para crear tu proyecto con con reflex es que te garanmtiza que siempre tengas las depencias actualizadas ademas de evitar escribir muchos comandos por terminal.
para el uso de correcto de esta plantilla necesitas los siguientes `requeriemintos`
## Requisitos previos
- [git](https://git-scm.com/) 
- [docker](https://www.docker.com/)
- [vscode](https://code.visualstudio.com/)
## Recomendaciones
1. hacer fork del repositorio, y ponerle el nombre del proyecto que deseamos crear
2. clonar el repositorio forkeado en nuestra Pc
## Cambios a realizar para el correcto funcionamiento
1. cambiar nombre de la carpata principal por el nombre de nuestro proyecto
2. cambiar nombre del archivo `.py` principal por el mismo nombre de nuestro proyecto
3. modificar el archivo `rxconfig.py`
```python
config = rx.Config(
    #reemplazar esto nombrer por el nombre de nuestro proyecto
    app_name="<aqui_nombre_proyecto>",
)
```
4. finalmente ejecutra por terminal
```bash
reflex run
```