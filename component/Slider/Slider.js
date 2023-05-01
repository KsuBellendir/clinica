import './Slider.css';
import {useState} from 'react';
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'
import img from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';

const Slider = () => {
    const dataCheckUp = [{
            id: 1,
            h1: 'ololoo',
            p: 'ttyuyuuiu',
            l1: 'fjhfis',
            l2: 'fjhfhfhfis',
            l3: 'fjherteetyyyyyyyyeyfis',
            image: img
        } ,
        {
            id: 2,
            h1: 'ololohjgfgo',
            p: 'ttyuyu gjgj uiu',
            l1: 'fjhf   bfdb is',
            l2: 'fjhfhfhgjfj fis',
            l3: 'fjherteetyy  xdyyyyyyeyfis',
            image: img2
        },
        {
            id: 3,
            h1: 'olwwwweroloo',
            p: 'ttyuy  fhf uuiu',
            l1: 'fjhsff aasd asd fis',
            l2: 'fjhfhsf ad fhfis',
            l3: 'fjhertee  tyyyyyy yyeyfis',
            image: img3
        },
        {
            id: 4,
            h1: 'oloqqqqfgvc loo',
            p: 'ttyuy  uuiu',
            l1: 'fjh fis',
            l2: 'fjhf hfhfis',
            l3: 'fjherte etyyyyyyy yeyfis',
            image: img4
        }];
   
    const [check, setCheck] = useState(dataCheckUp);
    const [index, setIndex] = useState(0);

    return ( 
            <div className = 'contain'>            
               {check.map((check, ind) => {
            const {id, h1, p, l1, l2, l3, image} = check;
            let position = 'nextSlide';
            if(ind === index){
                position = 'activeSlide';
            }
            if(ind === index - 1 || (index === 0 && ind === check.lenght -1)){
                position = 'lastSlide'
            }

            return (
                <article className={position} key={id}>
                        <div className='wrapper'>
                            <h1 className='text-h1'>{h1}</h1>
                            <p className='text-slaid'>{p}</p>
                            <li className='text-li'>{l1}</li>
                            <li className='text-li'>{l2}</li>
                            <li className='text-li'>{l3}</li>
                            <div className='wrap-btn'>
                                <button className='btn-green'>Записаться</button>
                                <button className='btn-white'>Подробнее</button>
                            </div>
                            <img src={image} alt={h1} className='img-slider'/>
                        </div>
                    <button className='icon' onClick={()=>setIndex(prew => prew-1)}><GrLinkPrevious/></button>
                    <button className='icon' onClick={()=>setIndex(next => next+1)}><GrLinkNext/></button>
                </article>
            )
        })}

             
            </div> 

    )
}

export default Slider;