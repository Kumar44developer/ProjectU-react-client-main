import Layout from "../../components/layout/Layout";
import { firstUpperCase } from "../../helpers/string.helper";
import * as userService from "../../services/user.service";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const EditUser = () => {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

































