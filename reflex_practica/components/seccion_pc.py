import reflex as rx
from ..components.mi_button import mi_button_p
def seccion_pc()->rx.Component:
  return rx.desktop_only(
    rx.heading(
        
      "Elige, Selecciona y Compra el mejor Ordenador",
      color="#eff9ff",
      size="8",
      align="center"
    ),
    rx.heading(
      "con ",
      rx.text.em("PC STORE",color="#090b0f"),
      color="#eff9ff",
      size="9",
      align="center"
    ),
    rx.hstack(
      rx.text(rx.text.em("",color="#92dafe",weight="bold")," ¡Bienvenido a Pc Store! Tu destino para la mejor selección de componentes y periféricos para PC. Ya sea que estés buscando construir tu PC de ensueño, actualizar tu sistema actual o simplemente necesitas un nuevo ratón o teclado, tenemos todo lo que necesitas. Explora nuestra amplia gama de productos de las marcas más reconocidas y disfruta de precios competitivos y un servicio al cliente excepcional..",size="5",color="#eff9ff",width="70vw"),
      rx.box(
        rx.image(src="https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg",alt="Imagen de app"),
        width="30vw"
      ),
      align="center"
    ),
    rx.vstack(
      rx.button("Iniciar Sesion", color="black", href="/login"),
      margin_top="em",
      align="center"
    ),
    rx.vstack(
      rx.button("Registrarse", color="Black", href="/login"),
      margin_top="3em",
      align="center"
    ),
    width="65vw",
  )

