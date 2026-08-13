import "./Category.css";

import {
    FaHeart,
    FaBirthdayCake,
    FaGift,
    FaGlassCheers
} from "react-icons/fa";

const categories = [
    {
        id:1,
        icon:<FaHeart />,
        title:"Thiệp cưới"
    },
    {
        id:2,
        icon:<FaBirthdayCake />,
        title:"Thiệp sinh nhật"
    },
    {
        id:3,
        icon:<FaGift />,
        title:"Thiệp Tết"
    },
    {
        id:4,
        icon:<FaGlassCheers />,
        title:"Thiệp khai trương"
    }
];

function Category(){

    return(

        <section className="category-section">

            <h2>Danh mục thiệp</h2>

            <div className="category-grid">

                {
                    categories.map(item=>(
                        <div className="category-card" key={item.id}>

                            <div className="category-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                        </div>
                    ))
                }

            </div>

        </section>

    )

}

export default Category;