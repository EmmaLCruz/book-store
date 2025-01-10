import {
  FaSearch,
  FaShareAlt,
  FaHeart,
  FaAngleDoubleRight,
} from "react-icons/fa";
import MainBlogWriter1 from "../../../assets/images/main-blog-writer1.jpg";
import MainBlogImg1 from "../../../assets/images/main-blog-img1.jpg";

const BlogMainArticle = () => {
  return (
    <article className="grid grid-cols-5 border-b border-neutral-200 pb-8">
      <div>
        <div>
          <figure>
            <img src={MainBlogWriter1} alt="" />
          </figure>
          <div>
            <p>Writen By</p>
            <h2>Belly</h2>
          </div>
        </div>
        <div>
          <p>
            26
            <span>th</span>
          </p>
          <p>August 2024</p>
        </div>
      </div>

      <div className="col-span-4">
        <div className="relat">
          <img src={MainBlogImg1} alt="" />
          <div className="flex">
            <FaSearch />
            <FaShareAlt />
            <FaHeart />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-bold text-2xl text-black">
            NerdCon Stories, Day Two
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </article>
  );
};

const BlogMain = () => {
  return (
    <article className="lg:col-span-3 mx-auto flex flex-col gap-8">
      <BlogMainArticle />
      <BlogMainArticle />
      <BlogMainArticle />
      <BlogMainArticle />
      <div>
        <ul className="w-fit flex justify-center items-center mx-auto border border-neutral-400 [&>li]:py-3 [&>li]:px-4 [&>li]:font-medium [&>li]:border-r [&>li]:border-neutral-400">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a className="text-sm" href="#">
              <FaAngleDoubleRight />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BlogMain;
