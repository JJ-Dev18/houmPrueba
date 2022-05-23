
/**
  Este archivo maneja los mensajes de errores personalizados para la aplicacion
 */

export const _handleError = (status) => {
  //Dependiendo del status enviamos un error
  if (status === 404) {
    throw new NotFoundError();
  }

  if (status === 500) {
    throw new ServerError();
  }
}

//Maneja los errores para modificar el mensaje de error 

export const  _throwSpecificError = (err) => {
  if (err instanceof ServerError || err instanceof NotFoundError) {
    throw err;
  }
  throw new NetworkError();
}

//Los tipos de error que podemos encontrar 
export class NetworkError extends Error {
  constructor() {
    super("Error de conexión");
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("The searched pokemon could not be found");
  }
}

export class ServerError extends Error {
  constructor() {
    super("Error de servidor");
  }
}