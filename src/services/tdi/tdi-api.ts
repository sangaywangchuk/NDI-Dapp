import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../fetcher";
import { TdiPayload } from "@/types/auth-types";

export const useApplyTdi = () => {
  const applyTdi = async (tdiPayload: TdiPayload) => {
    return axiosInstance.post<TdiPayload>(`/api/v1/tdis/apply`, {
      tdi: tdiPayload,
    });
  };

  return useMutation({
    mutationFn: applyTdi,
  });
};

export const useReject = () => {
  const reject = async (tdiId: string) => {
    return axiosInstance.put<TdiPayload>(`/api/v1/tdis/reject/${tdiId}`);
  };

  return useMutation({
    mutationFn: reject,
  });
};

export const useAccept = () => {
  const accept = async (tdiId: string) => {
    return axiosInstance.put<TdiPayload>(`/api/v1/tdis/accept/${tdiId}`);
  };

  return useMutation({
    mutationFn: accept,
  });
};

export const useListTdis = () => {
  const listTdis = async () => {
    return axiosInstance.get<unknown>(`/api/v1/tdis`);
  };

  return useQuery({
    queryFn: listTdis,
    queryKey: ["tdis"],
  });
};

export const useTDIDetail = (tdiId: string) => {
  const tdiDetail = async () => {
    return axiosInstance.get<unknown>(`/api/v1/tdis/${tdiId}`);
  };

  return useQuery({
    queryFn: tdiDetail,
    queryKey: ["tdis", tdiId],
  });
};

export const useUserListing = () => {
  const userListing = async () => {
    return axiosInstance.get<unknown>(`/api/v1/users`);
  };

  return useQuery({
    queryFn: userListing,
    queryKey: ["user-listing"],
  });
};

export const useUserDetail = (userId: string) => {
  const userDetail = async () => {
    return axiosInstance.get<unknown>(`/api/v1/users/${userId}`);
  };

  return useQuery({
    queryFn: userDetail,
    queryKey: ["user-detail", userId],
  });
};
