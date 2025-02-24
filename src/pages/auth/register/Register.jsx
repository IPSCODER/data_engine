import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../../ui/card/Card";
import { Input } from "../../../ui/input/Input";
import { Select } from "../../../ui/select/Select";
import { Button } from "../../../ui/button/Button";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/context";

const ContentSignIn = styled.div`
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
  background-color: #f0f2f5; 

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent; 
    border-right: 100px solid transparent; 
    border-bottom: 100px solid #007bff; 
  }
`

const Register = () => {
  const navigate = useNavigate()
  const {users,setUsers} = useUser()
  const [successData,setSuccessData] = useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const role = watch("role");

  const onSubmit = (data) => {
    // alert(JSON.stringify(data, null, 2));
    const user = users.find((item) => item.email == data.email);
    if(user){
      alert("Email already exists")
    }else{
      setUsers(prev => [...prev,data])
      setSuccessData(data)
    }
  };

  return (
    <Container>
      <Card>
      {!successData ? (
        <CardContent  >
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group" >
            <label>Full Name</label>
            <Input {...register("fullName", { required: "Full Name is required" })} />
            {errors.fullName && <p className="error-text">{errors.fullName.message}</p>}
          </div>
          
          <div className="form-group" >
            <label>Email</label>
            <Input type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>
          
          <div className="form-group" >
            <label>Role</label>
            <Select {...register("role", { required: "Role is required" })}>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>  
              <option value="User">User</option>
            </Select>
            {errors.role && <p className="error-text">{errors.role.message}</p>}
          </div>
          
          {role === "Admin" && (
            <>
              <div className="form-group" >
                <label>Admin Code</label>
                <Input {...register("adminCode", { required: "Admin Code is required" })} />
                {errors.adminCode && <p className="error-text">{errors.adminCode.message}</p>}
              </div>
              
              <div className="form-group" >
                <label>Admin Permissions</label>
                <Input {...register("adminPermissions", { required: "Admin Permissions are required" })} />
                {errors.adminPermissions && <p className="error-text">{errors.adminPermissions.message}</p>}
              </div>
            </>
          )}

          {role === "User" && (
            <>
              <div className="form-group" >
                <label>Preferences</label>
                <Input {...register("preferences", { required: "Preferences are required" })} />
                {errors.preferences && <p className="error-text">{errors.preferences.message}</p>}
              </div>
              
              <div className="form-group" >
                <label>Subscription Plan</label>
                <Input {...register("subscriptionPlan", { required: "Subscription Plan is required" })} />
                {errors.subscriptionPlan && <p className="error-text">{errors.subscriptionPlan.message}</p>}
              </div>
            </>
          )}

          <div className="form-group" >
            <label>Password</label>
            <Input type="password" {...register("password", { required: "Password is required" })} />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>
          
          <Button type="submit" className="button">Sign Up</Button>
          <ContentSignIn><p>have an account?</p>  <Button onClick={() => {navigate("/login")}} >Sign In</Button></ContentSignIn>
        </form>
      </CardContent>
      ) : (
        <>
      <CardContent>
        <h1>Registration Successful</h1>
        {JSON.stringify(successData, null, 2)}
        <Button onClick={() => {navigate("/login")}} >Sign In </Button>
      </CardContent>  
        </>
      ) }
    </Card>
    </Container>
  );
};

export default Register;
