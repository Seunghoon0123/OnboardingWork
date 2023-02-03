import { gql } from 'apollo-server-micro';

export const GET_TOTAL_USER_COUNT = gql`
  query {
    getTotalUserCount
  }
`;

export const CREATE_PROFESIONAL = gql`
  mutation CreateProfessional($input: CreateProfessionalInput!) {
    createProfessional(input: $input) {
      id
      userId
      groupId
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      publicId
      email
    }
  }
`;
