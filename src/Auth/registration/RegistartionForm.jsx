import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../../Ui/Input";
import { Link, useNavigate } from "react-router-dom";

const RegistartionForm = () => {
  const history =useNavigate();
  const initialvalue = {
    name:"",
    email: "",
    password: "",
  };
  
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues: initialvalue });

  const onSubmit = async(data) => {
    console.log(data);

    try {
      const result =await fetch('http://localhost:8001/signup',{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
      });
      let response =await result.json();
      switch (response.status) {
        case 'created':
          alert(`${response?.data?.name} Registration sucessfull`);
          history("/");
          break;
        case 'exist':
          alert(`${data?.name} is alredy exist`);
          break;
        case 'fail':
          alert(`something went wrong`);
          break;
        default:
          alert('something went wrong');
          break;
      }
     
    } catch (error) {
      console.error('error geneated ',error)
    }
  };

  return (
    <div className="Card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input 
              type="text"
              placeholder="Name"
              error={errors?.password}
              mesasge="Name is required"
              onBlur={() => {
                  field.onBlur(); 
                  clearErrors("name"); 
                }}
              {...field} />}
            />

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
        <span>

        <Link to="/" className="Link">I have alerady account?</Link>
        </span>
      </form>
    </div>
  );
};

export default RegistartionForm;
