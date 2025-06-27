
import { axiosInstance } from "../fetcher";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Maybe } from "@/types/util-types";

export const useSaveDiagram = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const saveDiagram = async (
    saveDiagramRequestBody: unknown
  ) => {
    return axiosInstance.put<unknown>(
      `/whiteboards/save/${workspaceId}`,
      saveDiagramRequestBody
    );
  };

  return useMutation({
    mutationFn: saveDiagram,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["diagrams", workspaceId],
      });
    },
  });
};

export const useDeleteDiagram = (workspaceId: string) => {
  const queryClient = useQueryClient();
  const deleteDiagram = async (diagramId: string) => {
    return axiosInstance.delete(`/whiteboards/${diagramId}`);
  };

  return useMutation({
    mutationFn: deleteDiagram,
    mutationKey: ["diagrams", workspaceId],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["diagrams", workspaceId],
      });
    },
  });
};

export const useGetDiagram = (diagramId: string) => {
  const getDiagram = async () => {
    return axiosInstance.get<unknown>(`/whiteboards/${diagramId}`);
  };

  return useQuery({
    queryKey: ["diagram", diagramId],
    queryFn: getDiagram,
  });
};

export const useGetDiagrams = ({
  workspaceId,
  featureId,
}: {
  workspaceId: Maybe<string>;
  featureId?: Maybe<string>;
}) => {
  const getDiagrams = async () => {
    return axiosInstance.get<{ whiteboards: unknown[] | null }>(
      `/whiteboards/list/${workspaceId}`,
      {
        params: {
          feature_id: featureId,
        },
      }
    );
  };

  return useQuery({
    queryKey: ["diagrams", workspaceId],
    queryFn: getDiagrams,
    enabled: !!workspaceId,
  });
};
