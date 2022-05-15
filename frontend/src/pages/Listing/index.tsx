import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { BASE_URL } from "utils/requests";


function Listing() {

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(Response => {
            console.log(Response.data)
        });
    return (
        <>
            <Pagination></Pagination>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard></MovieCard>
                    </div>
                </div>

            </div>

        </>
    );

}
export default Listing;