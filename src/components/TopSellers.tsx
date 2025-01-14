import { FC } from "react";
import JuegoTronos from "../assets/images/juego-tronos.webp";
import DoceReglas from "../assets/images/12-reglas-para-vivir.webp";
import LibertadPrimera from "../assets/images/libertad-primera-y-ultima.webp";
import PoderHabitos from "../assets/images/poder-habitos.webp";
import StarsElement from "./StarsElement";

const books = [
  {
    id: 1,
    title: "Juego de tronos",
    author: "George R. R. Martin",
    img: JuegoTronos,
    rating: 5,
    price: 692.99,
  },
  {
    id: 2,
    title: "12 reglas para vivir",
    author: "Jordan Peterson",
    img: DoceReglas,
    rating: 4,
    price: 789.65,
  },
  {
    id: 3,
    title: "La libertad primera y última",
    author: "Jiddu Krishnamurti",
    img: LibertadPrimera,
    rating: 5,
    price: 849.39,
  },
  {
    id: 4,
    title: "El poder de los hábitos",
    author: "Charles Duhigg",
    img: PoderHabitos,
    rating: 5,
    price: 526.15,
  },
];

interface BookCardProps {
  id: number;
  img: string;
  title: string;
  author: string;
  price: number;
  rating: number;
}

interface BookArticleItemsProps {
  cols: number;
}

const BookCard: FC<BookCardProps> = ({
  id,
  img,
  title,
  author,
  price,
  rating,
}) => {
  return (
    <article key={id} className="top-sellers__book-card bg-white">
      <div className="flex flex-col items-center">
        <figure className="book-card__image">
          <img
            className="p-6"
            src={img}
            alt={`Portada de ${title}`}
            width="620"
            height="900"
            loading="lazy"
          />
        </figure>
        <h3 className="-mt-4 pb-3 text-lg">{title}</h3>
      </div>
      <div className="top-sellers__hidden-menu">
        <div className="top-sellers__hidden-menu__body">
          <h3 className="text-3xl font-bold w-11/12">{title}</h3>
          <p className="text-lg">{author}</p>
          <div className="flex text-2xl">
            <StarsElement num={rating} />
          </div>
          <span className="text-3xl font-thin">${price}</span>
          <button className="font-semibold uppercase border-2 border-white py-2 px-4 hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export const BookArticleItems: FC<BookArticleItemsProps> = ({ cols }) => {
  return (
    <article>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${cols} gap-12 lg:gap-8 py-6`}
      >
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </article>
  );
};

const TopSellers = () => {
  return (
    <section className="top-sellers bg-slate-100" id="top-sellers">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="section__title">
            Top <span className="text__accent-color">Best</span> Sellers
          </h2>
          <p>
            Discover the most popular and best-selling books in record time. Our
            collection includes bestsellers that are still available for you to
            easily purchase.
          </p>
        </div>
        <BookArticleItems cols={4} />
      </article>
    </section>
  );
};

export default TopSellers;
