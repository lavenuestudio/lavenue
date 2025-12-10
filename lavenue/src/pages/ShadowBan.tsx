import "./ShadowBan.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import type { shadowBanDataPants } from "../data/db"; // ajusta la ruta
import type { shadowBanDataJersey } from "../data/db"; 

type ShadowBanProps = {
  shadowBanDataPants: shadowBanDataPants[];
  shadowBanDataJersey: shadowBanDataJersey[];
};

export default function ShadowBan({ shadowBanDataPants, shadowBanDataJersey }: ShadowBanProps) {
  return (
    <div>
      <div className="pants-section">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="pants-wrapper">
              {shadowBanDataPants.map((patch) => (
                <img
                  key={patch.id}
                  className={`patches pants-overlay-${patch.id}`}
                  src={`/images/parches/${patch.image}`}
                  alt={patch.id}
                />
              ))}
              <img
                className="pants-img"
                src={`/images/parches/pants.webp`}
                alt="Pantalón Shadow Ban"
              />
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
              {shadowBanDataJersey.map((patch) => (
                <img
                  key={patch.id}
                  className={`patches pants-overlay-${patch.id}`}
                  src={`/images/parches/${patch.image}`}
                  alt={patch.id}
                />
              ))}
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
