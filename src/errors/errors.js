


export const _handleError = (status) => {
  if (status === 404) {
    throw new NotFoundError();
  }

  if (status === 500) {
    throw new ServerError();
  }
}

export const  _throwSpecificError = (err) => {
  if (err instanceof ServerError || err instanceof NotFoundError) {
    throw err;
  }
  throw new NetworkError();
}

export class NetworkError extends Error {
  constructor() {
    super("Error de conexión");
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("El recurso requerido no se encuentra.");
  }
}

export class ServerError extends Error {
  constructor() {
    super("Error de servidor");
  }
}