import React from "react";

const Container = () => {
    return(
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">BIENVENIDO!!!</h1>
                <p className="col-md-8 fs-4">
                    Deliciosa comida venezolana para que disfrutes solo o en familia y amigos.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Llama para ser atendido
                </button>
            </div>
        </div>
    );
};

export default Container;

  