import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";

const axiosHandler = async (url:string, data:any) => await axios.post(url, data);  

const errorMessageDisplay = (text:string) => (
  <p
  style={{
    color : "red",
    fontSize : 12,
    marginLeft : 50,
    marginTop : 0,
    marginBottom : 5,
    fontWeight : "bold"
  }}
  >
    {text}
  </p>
);

const AuthForm = () => {
  
  const [isRegister, setRegister] = React.useState(false);
  const { register, handleSubmit, formState:{errors} } = useForm();
  console.log(errors);
  const formHandle  = () => {
    setRegister (((prev) => (prev = !prev)));
  };

  const onSubmit = async (data:any) => {
    console.log(data);
    const value = {
      confPassword: data.confPassword,
      email: data.email,
      nama: data.nama,
      password: data.password,
      phone: data.phone,
    };
    const statement = `http://localhost:7130/api/v1/${isRegister ? "register" : "login"}`;
    try {
      const  result = await axiosHandler(statement, value);
      console.log(result);
    } catch (error) {
      console.log(error);
    };
  };
  return (
    <section style={{
      display : "flex",
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      alignContent:'center',
      height:"100%",
      marginLeft : "20px",
      marginRight : "20px",
      }}
      >
      <div style={{borderRadius : "10px", border : "1px solid black", width : "70vh", marginTop : "20px"}}>
        <h2 style={{textAlign:"center", marginBottom : "20px", marginTop : "10px"}}>{isRegister ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {isRegister ? <>
          <div className="input-group mb-2 px-4" >
            <span className="input-group-text" id="nama">Name</span>
            <input type="text" className="form-control" placeholder="..." aria-describedby="nama" {...register("nama", {required : {value : true, message : "Invalid field required!"},})}/>
          </div>
          {errors.nama && errors.nama.message ? errorMessageDisplay(errors.nama.message) : null}

          <div className="input-group mb-2 px-4">
            <span className="input-group-text" id="email">Email</span>
            <input type="email" className="form-control" placeholder="..." aria-describedby="email" {...register("email", {required : {value : true, message : "Invalid field required!"},})} />
          </div>
          {errors.email && errors.email.message ? errorMessageDisplay(errors.email.message) : null}
          </> : null}
          
          <div className="input-group mb-2 px-4">
            <span className="input-group-text" id="phone_number">Phone Number</span>
            <input type="number" className="form-control" placeholder="..." aria-describedby="phone_number" {...register("phone_number", {required : {value : true, message : "Invalid field required!"},})}/>
          </div>
          {errors.phone_number && errors.phone_number.message ? errorMessageDisplay(errors.phone_number.message) : null}

          <div className="input-group mb-2 px-4">
            <span className="input-group-text" id="password">Password</span>
            <input type="password" className="form-control" placeholder="..." autoComplete="off" aria-describedby="password" {...register("password", {required : {value : true, message : "Invalid field required!"},})}/>
          </div>
          {errors.password && errors.password.message ? errorMessageDisplay(errors.password.message) : null}

          {isRegister ? <>
          <>
            <div className="input-group mb-2 px-4">
                <span className="input-group-text" id="confPassword">Confirm Password</span>
                <input type="password" className="form-control" placeholder="..." autoComplete="off" ar ia-describedby="confPassword" {...register("confPassword", {required : {value : true, message : "Invalid field required!"},})}/>
            </div>
            {errors.confPassword && errors.confPassword.message ? errorMessageDisplay(errors.confPassword.message) : null}
          </>
          </> : null}
          
          <div className="d-grid gap-2 mb-3 px-4">
            <button className="btn btn-primary" type="submit">{isRegister ? "Daftar" : "Masuk"}</button>
            <button className="btn btn-link" type="submit" onClick={formHandle}>{isRegister ? "Already Have Account?" : "Have Not Account?"}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;