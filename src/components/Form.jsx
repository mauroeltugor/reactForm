import { useState } from "react";

const Form = ({profile}) =>{

    const [phoneNumber, setPhoneNumber] = useState('');
    const[zipCode, setZipCode] = useState('');
    const[name, setName] = useState('');
    const[lastName, setLastName] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[password, setPassword] = useState('');

    const handlePassword = (event) =>{
        const result = event.target.value;

        if(result.length > 6){
            setPassword(result);
        }

    };

    const handleCountry = (event) =>{
        const result = event.target.value;

        if(!/\d/.test(result)){
            setCountry(result)
        }
    }

    const handleState = (event) =>{
        const result = event.target.value;

        if(!/\d/.test(result)){
            setState(result)
        }
    }

    const handleCity = (event) =>{
        const result = event.target.value;

        if(!/\d/.test(result)){
            setCity(result)
        }
    }

    const handleLast = (event) =>{
        const result = event.target.value;

        if(!/\d/.test(result)){
            setLastName(result)
        }
    }

    const handleName = (event) =>{
        const result = event.target.value;

        if(!/\d/.test(result)){
            setName(result)
        }
    }

    const HandleCode = (event) =>{

        const result = event.target.value;

        if(!isNaN(result)){
            setZipCode(result)
        }

    }

    const HandleNumber = (event) =>{

        const result = event.target.value;

        if(!isNaN(result)){
            setPhoneNumber(result)
        }

    }

    return(
        <div className="father">
            <section>
                <div>
                    <h1 className="editProfile">Edit Profile</h1>
                </div>
                <div>
                    <img className="profileImage" src={profile} />
                </div>
            </section>

            <section className="nameAndLastName">
                <div>
                    <label>Fast name</label> <br />
                    <input value={name} onChange={handleName} />
                </div>
                <div>
                    <label>Last name</label><br />
                    <input  value={lastName} onChange={handleLast}/>
                </div>
            </section>

            <section className="emailEtc">
                <div>
                    <label>Email</label><br />
                    <input className="place"  />
                </div>
                <div className="contact">
                    <label>Contacts Number</label><br />
                    <input className="place" value={phoneNumber} onChange={HandleNumber} />
                </div>
                <div className="contact">
                    <label>Address</label><br />
                    <input className="place"  />
                </div>
            </section>

            <section className="cityState">
                <div>
                    <label>City</label><br />
                    <input value={city} onChange={handleCity} />
                </div>
                <div>
                    <label>State</label><br />
                    <input  value={state} onChange={handleState}/>
                </div>
            </section>

            <section className="zipCode">
                <div>
                    <label>zip code</label><br />
                    <input  value={zipCode} onChange={HandleCode}/>
                </div>
                <div>
                    <label>Country</label><br />
                    <input value={country} onChange={handleCountry} />
                </div>
            </section>

            <section className="password">
                <label>Password</label><br />
                <input className="place" type="password" value={password} onChange={handlePassword}/>
            </section>
        </div>
    )
}

export default Form;