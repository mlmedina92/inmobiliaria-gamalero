// import React from 'react';

// const Slider = (props) => {

//     const itemCssClass = (index) =>{
//         return (index === 0)? 'active carousel-item' : 'carousel-item';
//     }

//     return (
//         <section className="container-xxl mb-5">
//             {/* Banner */}
//             <div className="carousel slide carousel-fade" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     {props.images.map((item, index) => {
//                         return (
//                             <div key={index} className={itemCssClass(index)}>
//                                 <img src={item.src} className="d-block w-100" alt={item.title}/>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#bannerPrincipal"
//                         data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#bannerPrincipal"
//                         data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default Slider;