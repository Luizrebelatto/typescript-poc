// map properties one type to other
// shortcut for creating typed objects

const info: Record<string, number> = {
    "age": 24,
    "year": 2025
}

const information: { [key: string]: number } = {
  "age": 24,
  "year": 2025
}

type Status = "success" | "Fail"

const statusMensagem: Record<Status, string> = {
  success: "The operation was successfully completed.",
  Fail: "operation failed",
}
