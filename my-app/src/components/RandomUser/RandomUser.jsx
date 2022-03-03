import React,  {useEffect, useState } from 'react';

export default function RandomUser() {

    const [user, setUser] = useState(null);

    
    useEffect(() => {
        fetch('https://api.randomuser.me/')
        .then(res => res.json())
        .then((data) => {
            
            setUser(data);

            const userData = {
                name: data.results[0].name.first,
                email: data.results[0].email,
                picture : data.results[0].picture.thumbnail,
            };

            setUser(userData);
        })
    }, []); //El array vacío para el bucle. UseEffect toma un array de dependencias vacío => se renderize una sola vez y no se vuelva a llamar


    return (
    <div>
        {user ? ( 
            <div className='col-lg-4'>
                <div className="text-center ccard-box">
                    <div className="member-card pt-2 pb-2">
                        <div>
                            <img
                            src={user.picture}
                            className='rounded mx-auto d-block' width={100} height={100} alt='Img-profile'/>
                            
                        
                        </div>
                        <div>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
     </div>
       
    )
}
