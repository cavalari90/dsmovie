import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
    //componente react é uma função javascript e então pode ter uma lógica por aqui...
    // .then() => é o que vai executar depois que a requisição voltar. (Assíncrono: o resto continua)

    //useState passa valores iniciais
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });



    //recebe 2 coisas: função a ser executada e lista de objetos a observar. Sempre que altera algo na lista, reexecuta func
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)  //garantindo que a busca vai ser ordenada pelo id. sempre vir na mesma ordem
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);

            });
    }, [pageNumber]);
    // tá falando que quando mudar pageNumber, precisa refazer a requisição



    return (
        <>

            <Pagination />


            <div className="container">
                <div className="row">
                    {/* Grids e Breakpoints em React*/}
                    {/* código abaixo diz que a partir do tamanho sm (small), cada card vai ocupar 6 dos 12 grids...*/}
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}





                </div>




            </div>

        </>

    );
}

export default Listing;