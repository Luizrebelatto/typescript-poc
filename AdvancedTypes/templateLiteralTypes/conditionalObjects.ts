type Status = "success" | "error" | "loading";

type StatusMessage = `message_${Status}`;

const status: Record<StatusMessage, string> = {
  message_success: "Good",
  message_error: "Wrong",
  message_loading: "Loading",
};
