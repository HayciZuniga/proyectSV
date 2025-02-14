import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Fade, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "@fontsource/dancing-script";
import "./styles.css";

const ValentineWebsite = () => {
  const [showContent, setShowContent] = useState(false);  // Mostrar el contenido después de la respuesta
  const [openDialog, setOpenDialog] = useState(false);  // Controlar el cuadro de diálogo
  const [userResponse, setUserResponse] = useState(null);  // Almacenar la respuesta del usuario
  const [openSnackbar, setOpenSnackbar] = useState(false); // Controlar la visibilidad de la notificación

  useEffect(() => {
    setTimeout(() => {
      setOpenDialog(true);  // Abrir el cuadro de diálogo después de la animación
    }, 3000);
  }, []);

  const handleResponse = (response) => {
    if (response === "YES") {
      setUserResponse(true);
      setShowContent(true);  // Mostrar el contenido cuando el usuario elija "Sí"
      setOpenDialog(false);  // Cerrar el cuadro de diálogo
    } else {
      setUserResponse(false);
      setOpenSnackbar(true);  // Mostrar la notificación
      setOpenDialog(true);  // Volver a abrir el cuadro de diálogo si el usuario dice "No"
    }
  };

  const cardData = [
    {
      image: "https://i.pinimg.com/736x/36/40/95/364095ba5c1f34d8924c1e1d556ab44e.jpg",
      title: "Contigo mi vida es un regalo, y hoy celebro el regalo de tenerte a mi lado💕"
    },
    {
      image: "https://i.postimg.cc/C5n2FBpt/Whats-App-Image-2025-02-13-at-12-12-54-PM-1.jpg",
      title: "Feliz San Valentín Mi Amor 💞"
    },
    {
      image: "https://i.pinimg.com/736x/45/7a/23/457a23eb4a46a84298a2d30fa4ec1fbd.jpg",
      title: "El amor lo es todo 💗"
    },
    {
      image: "https://i.postimg.cc/CKw9jxbB/Whats-App-Image-2025-02-13-at-12-12-54-PM.jpg",
      title: "Mi morenito hermoso, Te quiero con tod el corazón🤍"
    },
    {
      image: "https://i.pinimg.com/736x/58/9a/6d/589a6d8e7c12748f27ddc0c181496021.jpg",
      title: "Mis ojitos brillan cuando te pienso mi amor💖🙈 "
    },
    {
      image: "https://i.postimg.cc/w3KG3q6B/Whats-App-Image-2025-02-13-at-12-12-55-PM.jpg",
      title: "Tu belleza es como la raíz cuadrada de -1. no puede ser real 😍"
    },
    {
      image: "https://i.pinimg.com/474x/4c/9d/2b/4c9d2bad7462fca466c73eb8d4ac40fb.jpg",
      title: "Gracias por todo mi vida"
    },
    {
      image: "https://i.postimg.cc/d0twJBHx/Whats-App-Image-2025-02-13-at-12-18-57-PM.jpg",
      title: "Te quiero, puedes leerlo hoy, mañana y el resto de la vida 🥰"
    },
    {
      image: "https://i.pinimg.com/736x/8b/19/9f/8b199fea0eb77f824660e6e9815abf57.jpg",
      title: "Lo que sigue es solo para ti mi amor, TE QUIERO MUCHO MI NIÑO"
    },
  
    {
      image: "https://i.postimg.cc/RVH3sFQq/Whats-App-Image-2025-02-13-at-12-26-00-PM.jpg",
      title: " Por una mirada, un mundo; por una sonrisa, un cielo; por un BESO....Yo no sé que diera por un BESO💖"
    },
    {
      image: "https://i.postimg.cc/K8h1d2Jf/Whats-App-Image-2025-02-13-at-12-27-07-PM.jpg",
      title: "Eres la luz que ilumina mi corazon🌟🧡 "
    },
    {
      image: "https://i.postimg.cc/9MkM15DG/Whats-App-Image-2025-02-13-at-12-29-23-PM.jpg",
      title: "Las personas se combinan, pero tu me complementas💕 "
    },
    {
      image: "https://i.postimg.cc/fy0br2d1/Whats-App-Image-2025-02-13-at-12-30-32-PM.jpg",
      title: "Mis ojitos brillan cuando te pienso mi amor💖🙈 "
    },
    {
      image: "https://i.postimg.cc/K4SYSPrj/Whats-App-Image-2025-02-13-at-6-55-32-PM.jpg",
      title: "Eres mi sol, todos los días y mi corazón te da amor sin medida, mi vida 💘"
    },
  ];

  return (
    <div className="">
      {/* Animación del corazón antes de mostrar el contenido */}
      {!showContent && !userResponse && (
        <div className="heart-animation">
          <FavoriteIcon fontSize="large" color="error" />
        </div>
      )}

      {/* Cuadro de diálogo para la pregunta de sonreír */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>¿Estás listo para sonreír?</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Haz clic en una opción.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleResponse("YES")} color="primary">
            Sí
          </Button>
          <Button onClick={() => handleResponse("NO")} color="secondary">
            No
          </Button>
        </DialogActions>
      </Dialog>

      {/* Contenido que se muestra solo cuando el usuario responde "Sí" */}
      {userResponse && (
        <Fade in={showContent} timeout={1000}>
          <Container maxWidth="lg" className="content-container">
            <Typography variant="h3" className="title" style={{ fontFamily: "cursive" , fontWeight:"bold"}}>
              Feliz Día Mi Amor 🤍
            </Typography>
            <div className="card-container">
              {cardData.map((card, index) => (
                <Card className="card" key={index}>
                  <CardContent>
                    <img
                      src={card.image}
                      alt={`Romantic ${index}`}
                      className="romantic-image"
                    />
                    <Typography variant="h5" className="message">
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Fade>
      )}

      {/* Notificación (Snackbar) si la respuesta fue "No" */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="¡Porque si te ves tan guapo sonriendo mi amor!"
      />
    </div>
  );
};

export default ValentineWebsite;
