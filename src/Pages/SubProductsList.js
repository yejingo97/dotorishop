import React, { useState } from 'react'
import Style from './css/SubProductsList.module.css'
import { IoMdArrowDropright } from "react-icons/io";
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router-dom';

export default function SubProductsList() {
    const initCategory=["전체상품", "이웃집 토토로", "마녀배달부 키키", "센과 치히로의 행방불명", "하울의 움직이는 성", "천공의 성 라퓨타", "붉은돼지", "원령공주", "벼랑위의 포뇨", "귀를 기울이면", "바람계곡의 나우시카", "마루 밑 아리에티"]
    const [allProducts] = useProducts()
    const [category, setCategory] = useState("전체상품")

    const changeCategory=(category)=>{
        setCategory(category)
    }
    const filteredProducts=getFilteredProducts(allProducts, category)

    function getFilteredProducts(products, category){
        if(category==="전체상품"){
            return(
                products
            )
        }else{
            return(
                products.filter((item)=>(item.category===category))
            )
        }
    }
  return (
    <div className={Style.sub_products_wrap}>
        <div className={Style.sub_products}>
            <h2 className={Style.products_title}>
              전체상품
            </h2>
            <div className={Style.products_category}>
                <ul className={Style.products_category_list}>
                    {
                        initCategory.map((item)=>{
                            return (
                                <li className={item===category && Style.selected} onClick={()=>{
                                    changeCategory(item)
                                }}>{item}
                                    <span className={Style.products_category_icon}>
                                        <IoMdArrowDropright/>
                                    </span>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
            <div className={Style.products}>
                <ul className={Style.products_list}>
                    {
                       filteredProducts.map((item)=>{
                        return (
                            <li>
                                <Link to={`/productslist/${item.id}`}>
                                    <p className={Style.product_img}>
                                        <img src={item.image} alt=''/>
                                    </p>
                                    <p className={Style.product_main_category}>
                                        {item.category}
                                    </p>
                                    <p className={Style.product_name}>
                                        {item.name}
                                    </p>
                                    <p className={Style.product_price}>
                                        {item.price} 원
                                    </p>
                                </Link>
                            </li>
                        )
                       }) 
                    }
                    
                </ul>
                <div className={Style.sub_page_num}>
                    <nav>
                        <ul className={Style.sub_page_num_list}>
                            <li className={Style.selected_num}>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
