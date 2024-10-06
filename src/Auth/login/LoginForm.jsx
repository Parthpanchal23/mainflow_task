import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../../Ui/Input";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const history = useNavigate();
  const initialvalue = {
    email: "",
    password: "",
  };
  
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues: initialvalue });

  const onSubmit = async (data) => {
    if(data)
    {
      console.log(data);
      try {
        const result =await fetch('http://localhost:8001/',{
          method:'POST',
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(data)
        });
        let response =await result.json();
        console.log("response",response,result);
        
        
        switch (response.status) {
          case 'sucesss':
            alert('User Logged in sucessfully');
            history("/home",{state:{id:data?.email}});
            break;
          case 'wrong Password':
            alert('Password is incorrect');
            break;
          case 'not exist':
            alert(`User Not Found`);
            break;
          case 'fail':
            alert(`something went wrong`);
            break;
          default:
            alert('Sucessfull');
            break;
        }
      
      } catch (error) {
        console.error('error geneated ',error)
        alert(`Try after some time`);
      }
    }
  };

  return (
    <div className="Card">
      <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input 
            type="email"
            placeholder="email"
            error={errors?.password}
            mesasge="email is required"
            onBlur={() => {
                field.onBlur(); 
                clearErrors("email"); 
              }}
            {...field} />}
          />
       
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input 
            type="password"
            placeholder="password"
            error={errors?.password}
            mesasge="Password is required"
            onBlur={() => {
                field.onBlur();
                clearErrors("password"); 
              }}
            {...field} />  }
          />
        <input  className="input" type="submit" />
        <hr/>
        <Link to="/signup" className="Link">I  Don't have an account?</Link>
      </form>
    </div>
  );
};

export default LoginForm;
