import { useQuery, gql } from "@apollo/client";
import { restApiEndpoint } from "config";
import jwtDecode from "jwt-decode";
import * as React from "react";
import { useAuth } from "utils/globalState";
import { getAccessToken, setAccessToken } from "utils/security";

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default Dashboard;
