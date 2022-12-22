import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper';
import json from '../slidesrc.json';

export default function Scheduler(){
    const date = new Date();
    const [obj, setobj] = useState(json.mon);

    useEffect(()=>{
        switch(date.getDay())
        {
            case 1:
                setobj(json.mon);
                break;
            case 2:
                setobj(json.wed);
                break;
            case 3:
                setobj(json.wed);
                break;
            case 4:
                setobj(json.thu);
                break;
            case 5:
                setobj(json.fri);
                break;
            default:
                break;
        }})

    return(
        <>
         <Swiper
             direction="vertical"
             mousewheel
             keyboard
             className="schedule_swiper"
             slidesPerView = {5}
             spaceBetween ={30}
             modules={[Pagination, Mousewheel, Keyboard]}
             >
                {obj.map((sch)=>(
                <SwiperSlide>
                    <div className="schedule_content">
                    <h3 className="schedule">{sch.subject}<br/>
                    {sch.time}</h3>
                    </div>
                    </SwiperSlide>  
                ))}
         </Swiper>
        </>
    )
}