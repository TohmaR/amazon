import React, { useState, useLayoutEffect }from 'react';
import { useStateValue } from "../../../context/StateContext";
import HomeCarousel from './HomeCarousel/HomeCarousel';
import {HomeCarouselData} from './HomeCarousel/HomeCarouselData'
import ProductData from '../../Product/ProductData'
import ReactPaginate from 'react-paginate'

//Style
import './HomeDesktop.css';
import Product from '../../Product/Product'

function Home() {
    const [{searchBar, searchCategory}, dispatch] = useStateValue();
    const [pageNumber, setPageNumber] = useState(0);
 

    
    const productPerPage = 12;
    const pagesVisited = pageNumber * productPerPage;
    const pageCount = Math.ceil(ProductData
        .filter((product => {
            if(searchBar == "" && searchCategory === "Toutes nos Catégories"){
                return product
            } 
            else if(searchBar == "" && searchCategory === product.category){
                return product
            }
            else if(product.title.toLowerCase().includes(searchBar.toLowerCase()) && searchCategory === "Toutes nos Catégories"){
                return product
            }
            else if(product.title.toLowerCase().includes(searchBar.toLowerCase()) && searchCategory === product.category){
                return product
            }

        })).length / productPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
        window.scrollTo(0, 0);
    }

    return (
        <main className="home">
            <div className="home__container">
                <HomeCarousel slides={HomeCarouselData}/>
          

                <div className="home__row">
                    {ProductData
                    .filter((product => {
                        if(searchBar == "" && searchCategory === "Toutes nos Catégories"){
                            return product
                        } 
                        else if(searchBar == "" && searchCategory === product.category){
                            return product
                        }
                        else if(product.title.toLowerCase().includes(searchBar.toLowerCase()) && searchCategory === "Toutes nos Catégories"){
                            return product
                        }
                        else if(product.title.toLowerCase().includes(searchBar.toLowerCase()) && searchCategory === product.category){
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
                <div className="home__pagination__container">
                    <ReactPaginate
                        previousLabel={"← Page précédent"}
                        nextLabel={"Page suivante →"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"home__pagination"}
                        previousLinkClassName={"home__pagination__previous"}
                        nextLinkClassName={"home__pagination__next"}
                        disabledClassName={"home__pagination__disabled"}
                        activeClassName={"home__pagination__active"}
                    />
                </div>


            </div>
        </main>
    )
}

export default Home
