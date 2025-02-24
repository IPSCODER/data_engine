import React from 'react'
import { useForm } from 'react-hook-form';
import { Card, CardContent } from '../../../ui/card/Card';
import { Input } from '../../../ui/input/Input';
import { Button } from '../../../ui/button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/context';


const ContentSignUp = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #f0f2f5; /* Optional background color */

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent; /* Adjust size */
    border-right: 100px solid transparent; /* Adjust size */
    border-bottom: 100px solid #007bff; /* Triangle color */
  }
`

const Login = () => {
  const {setUser,users} = useUser()
  const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
          
      const onSubmit = (data) => {
        // alert(JSON.stringify(data, null, 2));
        const email = users.find((item) => item.email === data.email)
        const user = users.find((item) => item.email === data.email && item.password === data.password )
        if(!email){
          alert("user not found")
        }else if(!user){
          alert("password incorrect")
        }else{
          navigate("/")
          setUser(user);
        }
        
      };

  return (
   <Container>
    <Card >
      <CardContent  >
        <h2 className="title">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group" >
            <Input type="email" label={"Email"} {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          <div className="form-group" >
            <Input type="password" label={"Password"} {...register("password", { required: "Password is required" })} />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>
          
          <Button type="submit" className="button">Sign In</Button>
      <ContentSignUp><p>Don't have an account?</p>  <Button onClick={() => {navigate("/register")}} >Sign Up</Button></ContentSignUp>
        </form>
      </CardContent>
    </Card>
   </Container>
  )
}

export default Login