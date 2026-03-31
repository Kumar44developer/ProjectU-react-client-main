import Layout from "../../components/layout/Layout";
import * as userService from "../../services/user.service";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RemoveUser = () => {
  const DELAY_BEFORE_REDIRECTION_MS = 1000; // 1 second

  const { userId } = useParams();

  const submitAction = async () => {
    try {
      const response = await userService.removeUser(userId);

      if (response?.status) {
        toast.success("User has been removed.");
      } else {
        toast.warn(`User couldn't be removed.`);
      }


      setTimeout(() => {
        window.location.href = "/";
      }, DELAY_BEFORE_REDIRECTION_MS);
    } catch (error) {
      toast.error(`User cannot be removed.`);
      console.error(error.message);
    }
  };


  const cancelAction = () => {
    window.location.href = "/";
  };






























