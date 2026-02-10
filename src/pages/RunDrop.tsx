import "./ShadowBan.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper/modules";
import type { ShadowBanData } from "@/types/ShadowBanTypes";


type ShadowBanProps = {
  shadowBanDataPants: ShadowBanData[];
};

export default function RunDrop({ shadowBanDataPants }: ShadowBanProps) {
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
                  src={`${import.meta.env.BASE_URL}images/parches/${patch.image}`}
                  alt={patch.id}
                />
              ))}
              <img
                className="pants-img"
                src={`${import.meta.env.BASE_URL}images/parches/pants.webp`}
                alt="Pantalón Shadow Ban"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pants-wrapper">
              <img
                className="pants-img"
                src={`${import.meta.env.BASE_URL}images/parches/camiseta.webp`}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="pants-description">
          <h2>Shadow Ban</h2>
          <p>
            Una de las imagenes del pantalón ocasionó hace un par de años el título que da nombre a esta colección <b>"Shadow Ban"</b>. <br />
            Para el que no lo sepa, un Shadow Ban en redes sociales se refiere a cuando por subir algo fuera de lugar/tono 
            se te cancela de forma invisible a modo que tus publicaciones nuevas no se muestran a tanta gente como haría normalmente o tu cuenta no se recomienda durante un tiempo. <br />
            En este caso, fue la imagen de un payaso con una persona colgada de las piernas la cual se usaba en este grupo de forma bastante habitual 
            <br /> (se ha censurado en los parches lo maximo posible para evitar problemas).
          </p>
        </div>
      </div>
    </div>
  );
}
