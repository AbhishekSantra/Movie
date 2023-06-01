import React from 'react'
import "./movieItem.css";
// import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default function MovieItems(props,{element}){
    // let navigate=useNavigate();
    const summary=(a)=>{
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        alert(a);        
    }
    return (
        <><nav className="navbar">
            <img src="" className="brand-logo" alt="" />
            <ul className="nav-links">
                <li className="nav-items"><a href="/">TV</a></li>
                <li className="nav-items"><a href="/">Movies</a></li>
                <li className="nav-items"><a href="/">Sports</a></li>
                <li className="nav-items k"><a href="/">KiDS</a></li>
            </ul>
            <div className="right-container">
                <input type="text" className="search-box" placeholder="search" />
                <button className="sub-btn">subscribe</button>
                <a href="/" className="login-link">Login</a>
            </div>
        </nav>
        <ul className="list-container">
        {props.movies.map((element) => (
                <li key={element.show.id} className="list-item">
                <div className="link-container">
                    <a href={element.show.url} className="link">{element.show.name}</a>
                </div>
                <div>
                {element.show.image ? (<img src={element.show.image.medium} alt={element.show.name}/>
                // eslint-disable-next-line jsx-a11y/alt-text
                ) : (<div className="missing-img-div"><img src=""/><h1>no photo available</h1></div>)}
                </div>
                <br />
                <button onClick={()=>summary(element.show.summary)} className='sub-btn'>Summary</button>
                
            </li>
		))}
        </ul>

       </>
    )

}


