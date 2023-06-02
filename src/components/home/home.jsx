import { Nav } from "../nav/nav";
import Style from "./home.module.css";
import Imagen from "./undraw_pair_programming_re_or4x.svg";
import Avatar1 from "./hombre (1).png";
import Fondo from "./kisspng-network-effect-computer-network-economics-organiza-background-e-learning-5b4fb31e145d28.8834565215319498540834.png";
import QuestionImage from "./undraw_questions_re_1fy7.svg";
import imagenFondo from "./olia-gozha-J4kK8b9Fgj8-unsplash.jpg";
import Avatar2 from "./mujer.png";
import Avatar3 from "./hombreSombrero.png";
import Footer from "../footer/componenteFooter";

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
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className={Style.cuerpo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ zIndex: "-1" }}
      >
        <path
          fill="#FD6584"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,213.3C672,181,768,139,864,128C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <body>
        {/* style={{ backgroundImage: `url(${imagenFondo})` }} */}
        <header className={Style.header}>
          <div className={Style.portada}>
            <div className={Style.contenedorTextoCabecera}>
              <div className={Style.contenedorSlogan}>
                <h2 style={{ color: "#E6E6E6" }}>
                  "Domina el Código, Domina tu Futuro"
                </h2>
              </div>

              <h1>Aprende con nosotros y certifícate con +200 cursos online</h1>
              <Link to="/Formulario" style={{textDecoration:"none"}}>
              <div className={Style.botonCrearCuentaCabecera}>
                Crea tu cuenta gratis
              </div>
              </Link>
              <Link to="/Ingresa" style={{textDecoration:"none"}}>
              <div className={Style.botonIngresarCabecera}>Ingresa</div>
              </Link>
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
              <h2 style={{ color: "white", marginBottom: "5%" }}>
                ¡Bienvenid@ a CodeGenius
                <span style={{ color: "#FD6584" }}>_</span>!
              </h2>
              <p style={{ color: "white" }}>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3F3D56"
            fill-opacity="1"
            d="M0,128L80,144C160,160,320,192,480,176C640,160,800,96,960,96C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <section className={Style.sectionCo} id="sectionCo">
          <h2>Desarrolla tus habilidades con nuestros cursos</h2>
          <p className={Style.parrafo}>
            Nuestra amplia gama de cursos cubre todo, desde conceptos básicos
            hasta temas avanzados, para que puedas adaptar tu aprendizaje a tus
            necesidades y metas.
          </p>
          <p className={Style.parrafo}>
            Nuestros cursos están diseñados por expertos en cada área y se
            actualizan constantemente para mantenerse al día con los avances
            tecnológicos más recientes. Además, ofrecemos una variedad de
            recursos complementarios, como proyectos prácticos, ejercicios
            interactivos y foros de discusión, para que puedas aplicar lo que
            aprendes y conectarte con una comunidad apasionada. ¡No pierdas la
            oportunidad de desarrollar tus habilidades y convertirte en un
            verdadero CodeGenius! Explora nuestros cursos y comienza tu viaje
            hacia el dominio tecnológico. ¡Te esperamos con los brazos abiertos!
          </p>
        </section>

        <section className={Style.tarjetas}>
          <h2>¡Conoce a nuestro equipo! </h2>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            className={Style.disposicionTarjeta}
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

                <Text py="4">Frontend Developer</Text>
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
            className={Style.disposicionTarjeta}
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

                <Text py="4">Frontend Developer</Text>
              </CardBody>

              <CardFooter>
                <a href="https://github.com/SantiagoVillamilC">
                <Button variant="solid" colorScheme="blue">
                  Conoce más
                </Button>
                </a>
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
              className={Style.disposicionTarjeta}
            />

            <Stack>
              <CardBody>
                <Heading size="lg">Yeison Martinez</Heading>

                <Text py="4">Frontend Developer</Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Conoce más
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </section>
      </body>
    </div>
  );
}

export default Home;
