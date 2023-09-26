import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useStateValue } from '../../../context/StateContext'
import Product from '../../Product/Product'
import ProductData from '../../Product/ProductData'
import ReactPaginate from 'react-paginate'

//Style
import './HomeMobile.css'

function HomeMobile() {
    const { user } = useAuthContext();
    const [{searchBar}, dispatch] = useStateValue();
    const [pageNumber, setPageNumber] = useState(0);

    const productPerPage = 4;
    const pagesVisited = pageNumber * productPerPage;
    const pageCount = Math.ceil(ProductData
        .filter((product => {
            if(searchBar == ""){
                return product
            } else if(product.title.toLowerCase().includes(searchBar.toLowerCase())){
                return product
            }

        })).length / productPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
        window.scrollTo(0, 0);
    }

    return (
        <div className="homeMobile">
            <img className="homeMobile__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/ZmRiOTNjOTMt/ZmRiOTNjOTMt-ZjU4NDc2YzUt-w1242._CB660086338_SY300_.jpg" alt="home image"/>
            {!user && <div className="homeMobile__login">
                <p>Identifier-vous pour une meilleure <br/>expérience</p>
                <Link to="connexion" className="text-link"><div className="homeMobile__buttonRegister">Identifiez-vous</div></Link>
                <Link to="/inscription" className="text-link"><div className="homeMobile__buttonLogin">Créer un compte</div></Link>
            </div>}
            <div className="homeMobile__product">
                {ProductData
                    .filter((product => {
                        if(searchBar == ""){
                            return product
                        } else if(product.title.toLowerCase().includes(searchBar.toLowerCase())){
                            return product
                        }

                    }))
                    .slice(pagesVisited, pagesVisited + productPerPage)
                    .map((product, index) => {
                    
                        return (
                            <Product 
                                id={index} 
                                title={product.title} 
                                category={product.category}
                                image={product.image} 
                                price={product.price} 
                                ratingStar={product.ratingStar} 
                                ratingNumber={product.ratingNumber} 
                                prime={product.prime} 
                                url={product.url}
                            />
                        );
                

                })}
            </div>
            <div className="homeMobile__pagination__container">
                <ReactPaginate
                    previousLabel={"← Page précédent"}
                    nextLabel={"Page suivante →"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"homeMobile__pagination"}
                    previousLinkClassName={"homeMobile__pagination__previous"}
                    nextLinkClassName={"homeMobile__pagination__next"}
                    disabledClassName={"homeMobile__pagination__disabled"}
               
                />
            </div>
        </div>
    )
}

export default HomeMobile
