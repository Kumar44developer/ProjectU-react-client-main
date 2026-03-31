import Layout from '../../components/layout/Layout';
import UserCard from '../../components/user/UserCard';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { List } from 'react-content-loader';

const UsersList = () => {
  const [users, setUsers] = useState({}); 
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);

      const users = await userService.retrieveAllUsers();
      setUsers(users);
    } catch (error) {
      const retrieveErrorMessage = () => {
        const apiErrorMessage = error?.response?.data?.message;

        // Null Coalescing Operator
        return apiErrorMessage ?? 'Error while connecting to the server';
      };
      setErrorMessage(retrieveErrorMessage());








































