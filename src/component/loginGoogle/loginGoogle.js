import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const LoginButtonGoogle = () => {

    /*Variable de google */
    const google = window.google;
    /* Informacion del Usuario */
    /*
    Esta es la informacion que nos devuelve google del usuario. Example:
    aud: "731921851574-i43jomj56q2co4ca6pe0f8610acejdp5.apps.googleusercontent.com"
    azp: "731921851574-i43jomj56q2co4ca6pe0f8610acejdp5.apps.googleusercontent.com"
    email: "ialmendra@safelifedev.com"
    email_verified: true
    exp: 1675954491
    family_name: "Almendra"
    given_name: "Ivan"
    hd:"safelifedev.com"
    iat:1675950891
    iss:"https://accounts.google.com"
    jti:"56630ae4c733f2cb4805e72dd8e6338676806060"
    name:"Ivan Almendra"
    nbf: 1675950591
    picture:"https://lh3.googleusercontent.com/a/AEdFTp47MaUR6Wf7ZdU7S-3oRKyMhqOwDvXipagDw7sI=s96-c"
    sub: "112764611403819703876"
    */
    const [ user, setUser ] = useState({})
    const [token , setToken] = useState("")


  const responseFunction = (res) => {
    //res.credential is the token
    setToken(res.credential);
    //Esto se haria en el backend, pero lo hago aca para ver que dato arroja
    const objJWT = jwt_decode(res.credential);
    setUser(objJWT);
  };

  useEffect(() => {
    google?.accounts.id.initialize({
      //client_id lo obtenemos de la consola de google
      client_id:
        "731921851574-i43jomj56q2co4ca6pe0f8610acejdp5.apps.googleusercontent.com",
      //callback que se ejecuta cuando el usuario se loguea
      callback: responseFunction,
    });
    google?.accounts.id.renderButton(
      //id del elemento donde se va a renderizar el boton
      document.getElementById("signInButton"),
      //Diccionario con las opciones del boton
      {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "left",
        width: "220",
      }
    );
    /*En caso de que el usuario ingrese y refrese un token lo redireccionaremos a su perfil*/
    token.length > 10 && (window.location.href = "/profile")
    
  });

  return (
    <div className="d-flex justify-content-center mt-3">
      {/*Inicio de Sesion esto iria por ejemplo en la ruta /login */}
      <div id="signInButton"></div>
    </div>
  );
};
