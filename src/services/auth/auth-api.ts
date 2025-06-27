import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../fetcher";
import { AxiosResponse } from "axios";
import {
  GooeyWebhookPayload,
  LoginPayload,
  SignUpPayload,
} from "@/types/auth-types";
import { Maybe } from "@/types/util-types";

const setToken = (data: AxiosResponse<unknown, unknown>) => {
  debugger;
  if (data?.headers?.["authorization"]) {
    debugger;
    localStorage.setItem("TOKEN", data.headers["authorization"]);
  }
};
export const useSignUp = () => {
  const signUp = async (loginRequestBody: SignUpPayload) => {
    return axiosInstance.post<SignUpPayload>(`/api/v1/auth/register`, {
      user: loginRequestBody,
    });
  };

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      setToken(data);
    },
  });
};

export const useLogin = () => {
  const login = async (loginRequestBody: LoginPayload) => {
    return axiosInstance.post<LoginPayload>(`/api/v1/auth/login`, {
      user: loginRequestBody,
    });
  };

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data);
    },
  });
};

export const useSession = () => {
  const getSession = async () => {
    return axiosInstance.post<LoginPayload>(`/api/v1/sessions`);
  };

  return useMutation({
    mutationFn: getSession,
  });
};

export const useGooeyWebhook = (gooeyWebhookPayload: GooeyWebhookPayload) => {
  const getGooeyWebhook = async () => {
    return axiosInstance.post<GooeyWebhookPayload>(`api/v1/gooey`, {
      gooeyWebhookPayload,
    });
  };

  return useMutation({
    mutationFn: getGooeyWebhook,
  });
};

export const usePollGooey = () => {
  const pollGooey = async (session_id: Maybe<string>) => {
    return axiosInstance.post<GooeyWebhookPayload>(
      `api/v1/gooey/${session_id}`
    );
  };

  return useMutation({
    mutationFn: pollGooey,
  });
};
