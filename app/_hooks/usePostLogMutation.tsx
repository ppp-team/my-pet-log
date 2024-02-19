import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogs } from "@/app/_api/log/index";
import { LogType } from "@/app/_types/log/types";

interface MutationParams {
  petId: number;
  logData: LogType;
  date: { year: number; month: number; day: number };
}

export function usePostLogsMutation() {
  const queryClient = useQueryClient();

  return useMutation<LogType, Error, MutationParams>({
    mutationFn: async ({ petId, logData }) => postLogs(petId, logData),
    onSuccess: (data, variables) => {
      const { year, month, day } = variables.date;
      queryClient.invalidateQueries({
        queryKey: ["Logs", variables.petId, year, month, day],
      });
    },
  });
}
