type Status = "enable" | "disable" | "off"

type ApenasAtivos = Exclude<Status, "off">