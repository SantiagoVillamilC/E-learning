import { Nav } from "../nav/nav";
import Style from "./home.module.css";
import Imagen from "./undraw_pair_programming_re_or4x.svg";
import Avatar1 from "./hombre (1).png";
import Fondo from "./kisspng-network-effect-computer-network-economics-organiza-background-e-learning-5b4fb31e145d28.8834565215319498540834.png";
import QuestionImage from "./undraw_questions_re_1fy7.svg";
import imagenFondo from "./olia-gozha-J4kK8b9Fgj8-unsplash.jpg"
import Avatar2 from "./mujer.png"
import Avatar3 from "./hombreSombrero.png"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

function Home() {
  return (
    <div className={Style.cuerpo}>
      <body>
      {/* style={{ backgroundImage: `url(${imagenFondo})` }} */}
        <header className={Style.header} >
          <div className={Style.portada}>
            <div className={Style.contenedorTextoCabecera}>
              <div className={Style.contenedorSlogan}>
                <h2 style={{ color: "#E6E6E6" }}>
                  "Domina el Código, Domina tu Futuro"
                </h2>
              </div>

              <h1>Aprende con nosotros y certifícate con +200 cursos online</h1>
              <div className={Style.botonCrearCuentaCabecera}>
                Crea tu cuenta gratis
              </div>
              <div className={Style.botonIngresarCabecera}>Ingresa</div>
            </div>
            <div className={Style.contenedorImagenCabecera}>
              <img src={Imagen} alt="Imagen" style={{ width: "90%" }} />
            </div>
          </div>
        </header>

        <section className={Style.sectionQue} id="sectionQue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ width: "100%" }}
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,112C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          <div className={Style.contenedorQue}>
            <div className={Style.imageQue}>
              <img src={QuestionImage} alt="question" />
            </div>
            <div className={Style.textQue}>
              <h2 style={{color:"white", marginBottom:"5%"}}>¡Bienvenido a CodeGenius<span style={{color:"#FD6584"}}>_</span>!</h2>
              <p style={{color:"white"}}>
                En CodeGenius, nos apasiona el aprendizaje y la tecnología.
                Nuestro objetivo es brindarte cursos en línea de alta calidad
                para que puedas dominar diversas tecnologías de desarrollo y
                explorar temas relacionados. Si estás interesado en expandir tus
                conocimientos en el mundo de la programación y más allá, has
                llegado al lugar correcto.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>¿Cómo funciona?</h2>
          <p>
            Aquí puedes explicar cómo funciona tu producto o servicio y
            proporcionar información relevante.
          </p>
        </section>

        <section className={Style.tarjetas}>
          <h2>Nuestro equipo </h2>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={Avatar1}
              alt="Avatar"
            />

            <Stack>
              <CardBody>
                <Heading size="lg">Santiago Villamil</Heading>

                <Text py="4">Frotend Developer</Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Conoce más
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={Avatar2}
              alt="Avatar"
            />

            <Stack>
              <CardBody>
                <Heading size="lg">Camila Peña</Heading>

                <Text py="4">Frotend Developer</Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                Conoce más
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={Avatar3}
              alt="Avatar"
            />

            <Stack>
              <CardBody>
                <Heading size="lg">Yeison Martinez</Heading>

                <Text py="4">Frotend Developer</Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Conoce más
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </section>

        <footer>
          <p>Aquí puedes agregar el contenido que desees en el footer.</p>
        </footer>
      </body>
    </div>
  );
}

export default Home;
