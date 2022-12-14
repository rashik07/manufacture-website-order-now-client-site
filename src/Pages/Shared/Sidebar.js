import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import auth from '../../firebase.init';

import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from "../Hooks/useAdmin";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const items = [
    
    admin? {
      label: <Link to="/dashboard/addProduct">Add Products</Link>,

      key: "addproduct",
    }:"",
    admin? {
      label: <Link to="/dashboard/productList">Product List</Link>,

      key: "productlist",
    }:"",
    !admin ?{
      label: <Link to="/dashboard/myorder">My order</Link>,

      key: "myorder",
    }:"",
    !admin ?{
      label: <Link to="/dashboard/addReview">Add Review</Link>,

      key: "addreview",
    }:"",
    admin? { 
      label: <Link to="/dashboard/allusers">All user</Link>,

      key: "allusers",
    }:"",
    admin? { 
      label: <Link to="/dashboard/manageOrders">Manage Orders</Link>,

      key: "manageOrders",
    }:"",
  ];
  return (
    <div>
    
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={items}
          style={{
            height: '100%',
          }}
        />
       
      
    </div>
  );
};

export default Sidebar;
