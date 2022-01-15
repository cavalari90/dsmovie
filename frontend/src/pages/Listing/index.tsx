import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {
//componente react é uma função javascript e então pode ter uma lógica por aqui...
// .then() => é o que vai executar depois que a requisição voltar. (Assíncrono: o resto continua)

axios.get(`${BASE_URL}/movies?size=5&page=0`)
.then(Response => {
    console.log(Response.data);
});


    return (
        <>
            <Pagination />


            <div className="container">
                <div className="row">
                    {/* Grids e Breakpoints em React*/}
                    {/* código abaixo diz que a partir do tamanho sm (small), cada card vai ocupar 6 dos 12 grids...*/}
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                </div>




            </div>

        </>

    );
}

export default Listing;