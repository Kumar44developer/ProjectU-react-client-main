import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import * as userService from "../../services/user.service";
const RetrieveUser = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const user = await userService.retrieveUser(userId);
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  };

  
  useEffect(() => {
    fetchUser();
  }, [userId]);
