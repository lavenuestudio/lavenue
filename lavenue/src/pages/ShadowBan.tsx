import "./ShadowBan.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ShadowBanPage() {
  return (
    <div>
      <div className="pants-section">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="pants-wrapper">
              <img
                className="patches pants-overlay-anabelle"
                src={`/images/parches/anabelle.webp`}
              />
              <img
                className="patches pants-overlay-shoot"
                src={`/images/parches/shoot.webp`}
              />
              <img
                className="patches pants-overlay-spider"
                src={`/images/parches/spider.webp`}
              />
              <img
                className="patches pants-overlay-lavenuePatch"
                src={`/images/parches/lavenuePatch.webp`}
              />
              <img
                className="patches pants-overlay-colum"
                src={`/images/parches/colum.webp`}
              />
              <img
                className="patches pants-overlay-payaso1"
                src={`/images/parches/payaso1.webp`}
              />
              <img className="pants-img" src={`/images/parches/pants.webp`} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pants-wrapper">
              <img
                className="pants-img"
                src={`/images/parches/camiseta.webp`}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pants-wrapper">
              <img
                className="patches pants-overlay-woman"
                src={`/images/parches/woman.webp`}
              />
              <img
                className="patches pants-overlay-lavenuePatch2"
                src={`/images/parches/lavenuePatch2.webp`}
              />
              <img
                className="patches pants-overlay-payaso3"
                src={`/images/parches/payaso3.webp`}
              />
              <img
                className="patches pants-overlay-chair"
                src={`/images/parches/chair.webp`}
              />
              <img className="pants-img" src={`/images/parches/jersey.webp`} />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="pants-description">
          <h2>Shadow Ban</h2>
          <p>
            Aquí va la descripción del pantalón, historia del drop, materiales,
            etc. Todo este texto quedará alineado al lado del pantalón.
          </p>
        </div>
      </div>
    </div>
  );
}
